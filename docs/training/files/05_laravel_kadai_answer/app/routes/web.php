<?php

use App\Http\Controllers\SortableController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

// メンバー配置
Route::get('/', [SortableController::class, 'index'])->name('sortable.index');
Route::post('/sortable', [SortableController::class, 'store'])->name('sortable.store');
Route::patch('/sortable/{sortable}', [SortableController::class, 'update'])->whereNumber('sortable')->name('sortable.update');

// タスク管理
Route::get('/task', [TaskController::class, 'index'])->name('task.index');
Route::post('/task', [TaskController::class, 'store'])->name('task.store');
Route::delete('/task/{task}', [TaskController::class, 'destroy'])->whereNumber('task')->name('task.destroy');
