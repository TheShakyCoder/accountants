<?php

namespace App\Policies;

use App\Models\Media;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class MediaPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $operator): bool
    {
        return $operator->hasPermissionTo('internal.media.index');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $operator, Media $media): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $operator): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $operator, Media $media): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $operator, Media $media): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $operator, Media $media): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $operator, Media $media): bool
    {
        return false;
    }
}
