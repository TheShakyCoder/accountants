<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('field_changes', function (Blueprint $table) {
            $table->id();
            $table->string('auditable_type');          // e.g. App\Models\Post
            $table->string('auditable_id', 36);        // UUIDs
            $table->string('event', 20);               // created, updated, deleted
            $table->string('field')->nullable();        // column name (null for created/deleted summary rows)
            $table->longText('old_value')->nullable();
            $table->longText('new_value')->nullable();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamp('changed_at')->useCurrent();
            $table->timestamps();

            $table->index(['auditable_type', 'auditable_id']);
            $table->index('changed_at');
            $table->index('user_id');
        });

        DB::unprepared("
            CREATE TRIGGER field_changes_no_update
            BEFORE UPDATE ON `field_changes`
            FOR EACH ROW
            BEGIN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Updates are not allowed on field_changes';
            END
        ");

        DB::unprepared("
            CREATE TRIGGER field_changes_no_delete
            BEFORE DELETE ON `field_changes`
            FOR EACH ROW
            BEGIN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Deletes are not allowed on field_changes';
            END
        ");
    }

    public function down(): void
    {
        Schema::dropIfExists('field_changes');
    }
};
