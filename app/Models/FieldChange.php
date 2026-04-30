<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FieldChange extends Model
{
    protected $fillable = [
        'auditable_type',
        'auditable_id',
        'event',
        'field',
        'old_value',
        'new_value',
        'user_id',
        'changed_at',
    ];

    protected function casts(): array
    {
        return [
            'changed_at' => 'datetime',
        ];
    }

    public function auditable()
    {
        return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
