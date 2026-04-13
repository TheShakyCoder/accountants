<?php

namespace App\Http\Controllers\Internal;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;

class PageController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->cannot('viewAny', Page::class)) abort(403);

        return response()->json(['message' => 'This is a placeholder for the PageController.']);
    }
}
