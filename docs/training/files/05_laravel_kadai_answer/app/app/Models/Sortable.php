<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sortable extends Model
{
    /** 作成日時・更新日時のカラムを持たないテーブル */
    public $timestamps = false;

    /** 一括代入を許す項目 */
    protected $fillable = ['name', 'department_id', 'left_x', 'top_y'];

    /** このメンバーが所属している部署 */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
