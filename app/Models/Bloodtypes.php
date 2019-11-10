<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bloodtypes extends Model
{

    protected $table = 'blood_type';

    //
    public function players()
    {
        return $this->hasMany('App\Models\Players');
    }
}
