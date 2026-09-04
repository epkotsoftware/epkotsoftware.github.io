<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    /** 作成日時・更新日時のカラムを持たないテーブル */
    public $timestamps = false;

    /** この部署に所属しているメンバー */
    public function sortables(): HasMany
    {
        return $this->hasMany(Sortable::class);
    }
}
