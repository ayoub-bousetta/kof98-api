<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Models\Genders;
use App\Models\Players;
use App\Models\Bloodtypes;

class PlayersController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['like','index','one']]);
    }
     //get all players
     public function like(Request $request){

        $validator = Validator::make(
            ['item' => $request->item],
            ['item' => 'required|string']
        );


        if($validator->fails()){
            $errors=$validator->errors();
        }else{
            $items=Players::where('name', 'like',  '%'.$request->item.'%')->get();
       
            return $items->toJson();
        }
      
       
        return $errors->toJson();
    }


    //get all players
    public function index(Request $request){

        $items=Players::with('genders')->get();

        $data=[];

        foreach ($items as $key => $item) {
           

            $data[]=[
                "id"=>$item->id,
                "name" => $item->name,
                 "height"=>$item->height,
                "birthdate"=> date('j F, Y', strtotime($item->birthdate)),
                 "weight"=>$item->weight,
                 "occupation"=>$item->occupation,
               "img"=>$item->img,
               "slug"=>$item->slug,
                "blood_type_id"=>$item->blood->name,
               "gender_id"=>$item->genders->name,
               "fight_style"=>$item->fight_style,
                 "weapon"=>$item->weapon,

            ];

            
        }
     
       
        return $data;

    }


     //get One player
     public function one(Request $request){

        $validator = Validator::make(
            ['item' => $request->item],
            ['item' => 'required|numeric']
        );

        $data=[];
        
        if ($validator->fails()) {
            $errors=$validator->errors();
        }else{
            $item=Players::find($request->item);
          

            $data=[
                "id"=>$item->id,
                "name" => $item->name,
                 "height"=>$item->height,
                "birthdate"=> date('j F, Y', strtotime($item->birthdate)),
                 "weight"=>$item->weight,
                 "occupation"=>$item->occupation,
               "img"=>$item->img,
               "slug"=>$item->slug,
                "blood_type_id"=>$item->blood,
               "gender_id"=>$item->genders,
               "fight_style"=>$item->fight_style,
                 "weapon"=>$item->weapon,
                 "age"=>$item->birthdate,
                 'genders'=>Genders::all()->toArray(),
                 'Bloodtypes'=>Bloodtypes::all()->toArray(),

            ];

         
       

       
            if($item->count()<1){
                return  $error=['error'=>'Nothing found...'];
            }else{
                return $data;
            }
            
       
        }

        

     

     
       
       

    }



    
    //Retrive/Edit Player
    public function edit(Request $request){

        $validator = Validator::make(
            ['item' => $request->item],
            ['item' => 'required|numeric']
        );
  
        if ($validator->fails()) {
            $errors=$validator->errors();
        }else{
            $item=Players::find($request->item);

          
       
            if($item->count()<1){
                return  $error=['error'=>'Nothing found...'];
            }
            
       
        }



        if( $request->method() == "POST"){

        
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:255',
                'height' => 'required|numeric',
                "birthdate" => "required|date",
                "weight" => "required",
                "occupation" => "required",
                "blood_type_id" => "required",
               // "weapon" => "required",
                "fight_style" => "required",
               
                "gender_id" => "required",
                "name" => "required",
                "slug"=>Str::slug($request->input('name'), '-'),
            ]);
            $file = $request->file('img');
            $data=$request->all();
            $data['slug']=Str::slug($request->input('name'), '-');


            if($file !==null){
                 $done=false;
               $rules = ['img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'];
               $input = ['img' => $file];
               $checkme= Validator::make($input, $rules); // true

           
            if ($file && $checkme->passes()) {
                $file_new_name=Str::slug($request->input('name'), '-').'.' .$file->getClientOriginalExtension();   
                $file_path = 'storage/fighters/';
                $file->move($file_path, $file_new_name);
    
                $done=true;
            }else{
    
                $done=true;
            }

            $data['img']='fighters/'.$file_new_name;
            }else{
                $data['img']=$request->input('img');
                $done=true;
            }
        

           

           

           
          
          
            if ($validator->fails() || $done != true) {
                $errors=$validator->errors();
            }else{
                $player = $item->update($data);
             
                if($player){
                    
                    return $item->toJson();  
                }
           
            }
        }else{

            return $item->toJson();
    
       
    }
       return $errors->toJson();

    }


    //Add Player
    public function add(Request $request){
       

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'height' => 'required|numeric',
            "birthdate" => "required|date",
            "weight" => "required",
            "occupation" => "required",
            "blood_type_id" => "required",
           // "weapon" => "required",
            "fight_style" => "required",
           
            "gender_id" => "required",
            "name" => "required",
            "slug"=>Str::slug($request->input('name'), '-'),
        ]);
        
   
        if ($validator->fails()){
            $err=$validator->errors();
            $errors=['type' =>'errors', 'res'=>  $err];
            return $errors;
        }
        $file = $request->file('img');
        

        

            $done=false;
               $rules = ['img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'];
               $input = ['img' => $file];
               $checkme= Validator::make($input, $rules); // true

           
            if ($file && $checkme->passes()) {
                $file_new_name=Str::slug($request->input('name'), '-').'.' .$file->getClientOriginalExtension();   
                $file_path = 'storage/fighters/';
                $file->move($file_path, $file_new_name);
    
                $done=true;
            }else{
    
                $done=true;
            }
        
            $data=$request->all();
            $data['slug']=Str::slug($request->input('name'), '-');
            $data['img']='fighters/'.$file_new_name;


            if ($validator->fails() || $done != true) {
            $errors=$validator->errors();
        }else{
            $player = new Players($data);
            $saved=$player->save();
            if($saved){
                return $player->toJson();  
            }
       
        }
      
         return $errors->toJson();
        
    
       


    }
}
