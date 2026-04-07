<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Roles/Index', [
            'roles' => Role::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Roles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:roles,slug',
        ]);

        Role::create($validated);

        return to_route('admin.roles.index');
    }

    public function show(Role $role)
    {
        return Inertia::render('Admin/Roles/Show', [
            'role' => $role->load('rights'),
        ]);
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return to_route('internal.roles.index');
    }
}
