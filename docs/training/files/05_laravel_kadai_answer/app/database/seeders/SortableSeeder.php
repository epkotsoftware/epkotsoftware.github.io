<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SortableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('sortables')->insert([
            ['id' =>  1, 'name' => '佐藤',   'department_id' => 1, 'left_x' => 810, 'top_y' =>  56],
            ['id' =>  2, 'name' => '鈴木',   'department_id' => 1, 'left_x' => 631, 'top_y' => 302],
            ['id' =>  3, 'name' => '高橋',   'department_id' => 1, 'left_x' => 788, 'top_y' => 326],
            ['id' =>  4, 'name' => '田中',   'department_id' => 1, 'left_x' =>  79, 'top_y' => 150],
            ['id' =>  5, 'name' => '伊藤',   'department_id' => 1, 'left_x' => 590, 'top_y' =>  96],
            ['id' =>  6, 'name' => '渡辺',   'department_id' => 1, 'left_x' => 389, 'top_y' => 410],
            ['id' =>  7, 'name' => '山本',   'department_id' => 2, 'left_x' => 222, 'top_y' =>  91],
            ['id' =>  8, 'name' => '中村',   'department_id' => 2, 'left_x' => 824, 'top_y' => 170],
            ['id' =>  9, 'name' => '小林',   'department_id' => 2, 'left_x' =>  79, 'top_y' => 250],
            ['id' => 10, 'name' => '加藤',   'department_id' => 2, 'left_x' => 452, 'top_y' =>  93],
            ['id' => 11, 'name' => '吉田',   'department_id' => 2, 'left_x' => 422, 'top_y' => 263],
            ['id' => 12, 'name' => '山田',   'department_id' => 2, 'left_x' => 229, 'top_y' => 320],
        ]);
    }
}
