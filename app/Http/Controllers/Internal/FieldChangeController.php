<?php

namespace App\Http\Controllers\Internal;

use App\Http\Controllers\Controller;
use App\Models\FieldChange;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FieldChangeController extends Controller
{
    public function index(Request $request)
    {
        $query = FieldChange::with('user')
            ->latest('changed_at')
            ->when($request->search, function ($q, $s) {
                $q->where('field', 'like', "%{$s}%")
                  ->orWhere('old_value', 'like', "%{$s}%")
                  ->orWhere('new_value', 'like', "%{$s}%")
                  ->orWhere('auditable_id', 'like', "%{$s}%");
            })
            ->when($request->model, fn ($q, $m) => $q->where('auditable_type', $m))
            ->when($request->event, fn ($q, $e) => $q->where('event', $e))
            ->when($request->date_from, fn ($q, $d) => $q->where('changed_at', '>=', $d))
            ->when($request->date_to, fn ($q, $d) => $q->where('changed_at', '<=', $d . ' 23:59:59'));

        $changes = $query->paginate(50)->withQueryString();

        // Available model types for the filter dropdown.
        $modelTypes = FieldChange::select('auditable_type')
            ->distinct()
            ->orderBy('auditable_type')
            ->pluck('auditable_type')
            ->map(fn ($type) => [
                'value' => $type,
                'label' => class_basename($type),
            ]);

        return Inertia::render('Internal/FieldChanges/Index', [
            'changes'    => $changes,
            'modelTypes' => $modelTypes,
            'filters'    => $request->only(['search', 'model', 'event', 'date_from', 'date_to']),
        ]);
    }
}
