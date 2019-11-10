<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Players extends Model
{
    //

    protected $fillable = [
        'name', 'height', 'birthdate','weight','occupation','img','slug','blood_type_id','gender_id','fight_style','weapon',
    ];

    public function genders()
    {
        return $this->belongsTo('App\Models\Genders','gender_id');
    }

    public function blood()
    {
        return $this->belongsTo('App\Models\Bloodtypes','blood_type_id');
    }
}
