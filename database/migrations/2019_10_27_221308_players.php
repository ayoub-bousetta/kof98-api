<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Players extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->date('birthdate')->nullable();
            $table->float('height');
            $table->float('weight');
            $table->string('occupation');
            $table->integer('blood_type_id');
            $table->integer('weapon_id');
            $table->integer('fight_style_id');
            $table->mediumText('img');
            $table->integer('gender_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}
