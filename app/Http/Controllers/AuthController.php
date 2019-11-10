<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function register(Request $request){

       
        $validateUser = Validator::make($request->all(), [
            'name' => 'bail|required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);


        if($validateUser->fails()){
            $err=$validateUser->errors();
            $resp=['type' =>'errors', 'res'=>  $err];
        }else{  

            // $data = $request->all();
            // $data['password']= Hash::make($request->input('passwrod'));
            // $user = User::create($data);

        

            $createUser=new User;
            $createUser->remember_token=0;
            $createUser->name=$request->input('name');
            $createUser->email=$request->input('email');
            $createUser->password= Hash::make($request->input('password'));
     
         
           
            if($createUser->save()){

            
                $resp=['type' =>'success'];

            }


        }

        return $resp;
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    { 
        $credentials = request(['email', 'password']);


        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized']);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    function logmeout(){
        
   
            
            Auth::logout();
            return response()->json(['Success'=>"You're now disconnected"]);
        
        
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=>Auth::user()
        ]);
    }
}