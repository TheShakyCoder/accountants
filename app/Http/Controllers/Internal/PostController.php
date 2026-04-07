<?php

namespace App\Http\Controllers\Internal;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Post::class)) abort(403);
        
        return Inertia::render('Internal/Posts/Index', [
            'posts' => Post::orderBy('created_at', 'desc')->paginate(10),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Post $post)
    {
        //
    }

    public function edit(Post $post)
    {
        //
    }

    public function update(Request $request, Post $post)
    {
        //
    }

    public function destroy(Post $post)
    {
        //
    }
}
