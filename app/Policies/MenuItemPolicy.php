<?php

namespace App\Policies;

use App\Models\MenuItem;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class MenuItemPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $operator): bool
    {
        return $operator->hasPermissionTo('internal.menu-items.index') || $operator->is_admin;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $operator, MenuItem $menuItem): bool
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
    public function update(User $operator, MenuItem $menuItem): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $operator, MenuItem $menuItem): bool
    {
        return $operator->hasPermissionTo('internal.menu-items.delete') || $operator->is_admin;

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $operator, MenuItem $menuItem): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $operator, MenuItem $menuItem): bool
    {
        return false;
    }
}
