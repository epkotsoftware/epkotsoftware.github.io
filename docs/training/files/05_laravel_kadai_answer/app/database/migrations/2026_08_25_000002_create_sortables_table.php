<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sortables', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->foreignId('department_id')->constrained();
            $table->unsignedInteger('left_x')->nullable();
            $table->unsignedInteger('top_y')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sortables');
    }
};
