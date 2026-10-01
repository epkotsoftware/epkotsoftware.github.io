<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('departments')->insert([
            ['id' => 1, 'department' => '開発部'],
            ['id' => 2, 'department' => '営業部'],
        ]);
    }
}
