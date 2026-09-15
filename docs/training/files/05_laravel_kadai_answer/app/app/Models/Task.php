<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /** created_at だけ持ち、updated_at は持たないテーブル */
    public $timestamps = false;

    /** 一括代入を許す項目 */
    protected $fillable = ['task'];

    /** created_at を日時として扱う */
    protected function casts(): array
    {
        return ['created_at' => 'datetime'];
    }
}
