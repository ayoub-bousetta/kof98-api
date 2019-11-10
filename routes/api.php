<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('login',['as' => 'login', 'uses' => 'AuthController@login']);
    Route::post('logmeout', 'AuthController@logmeout')->name('logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

    
});



Route::group(['prefix'=>'players','as'=>'players'], function(){
    Route::get('/', ['as' => 'index', 'uses' => 'PlayersController@index']);
    Route::get('like/{item}', ['as' => 'like', 'uses' => 'PlayersController@like']);
    Route::get('one/{item}', ['as' => 'like', 'uses' => 'PlayersController@one']);
    Route::match(['get','post'],'edit/{item}', ['as' => 'edit', 'uses' => 'PlayersController@edit']);
    Route::post('add', ['as' => 'addplayer', 'uses' => 'PlayersController@add']);
});


