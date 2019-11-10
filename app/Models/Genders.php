<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genders extends Model
{
    //
    public function players()
    {
        return $this->hasMany('App\Models\Players');
    }
}
