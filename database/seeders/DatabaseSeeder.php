<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use App\Models\Privilege;
use App\Models\Right;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'is_admin' => true
        ]);
        $user = User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@example.com'
        ]);

        $role = Role::create([
            'name' => 'Admin',
            'slug' => 'admin',
        ]);

        Privilege::create([
            'role_id' => $role->id,
            'user_id' => $user->id,
        ]);

        Right::create([
            'role_id' => $role->id,
            'controller_method_name' => 'internal.posts.index',
        ]);
    }
}
