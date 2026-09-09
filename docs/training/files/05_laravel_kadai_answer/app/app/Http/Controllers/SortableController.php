<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Sortable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SortableController extends Controller
{
    /** 一覧を表示する */
    public function index(): View
    {
        // with() で部署も一緒に取ってくる（N+1 を避ける）
        $sortables   = Sortable::with('department')->orderBy('id')->get();
        $departments = Department::orderBy('id')->get();

        return view('sortable', [
            'sortables'   => $sortables,
            'departments' => $departments,
        ]);
    }

    /** 新しいメンバーを登録する */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name'          => ['required', 'string', 'max:50'],
            'department_id' => ['required', 'integer', 'exists:departments,id'],
        ]);

        Sortable::create($validated + ['left_x' => 20, 'top_y' => 20]);

        return redirect('/');
    }

    /** ドラッグした位置を保存する（Ajax） */
    public function update(Request $request, Sortable $sortable): JsonResponse
    {
        $validated = $request->validate([
            'left' => ['required', 'integer', 'min:0', 'max:9999'],
            'top'  => ['required', 'integer', 'min:0', 'max:9999'],
        ]);

        $sortable->update([
            'left_x' => $validated['left'],
            'top_y'  => $validated['top'],
        ]);

        return response()->json(['ok' => true]);
    }
}
