<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class TaskController extends Controller
{
    /** 一覧を表示する */
    public function index(): View
    {
        $tasks = Task::orderBy('id')->get();

        return view('task', ['tasks' => $tasks]);
    }

    /** タスクを追加する */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'task' => ['required', 'string', 'max:100'],
        ]);

        Task::create($validated);

        return redirect()->route('task.index');
    }

    /** 完了したタスクを消す（Ajax） */
    public function destroy(Task $task): JsonResponse
    {
        $task->delete();

        return response()->json(['ok' => true]);
    }
}
