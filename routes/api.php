<?php

use App\Event;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
Route::get('/event/{id}',function(Request $request,$id){
    return $request->user()->events()->find($id)->first();
})->middleware('jwt.auth');

Route::patch('/event/{id}',function(Request $request,$id){

    $event = $request->user()->events()->find($id)->first();

    $status = $event->update($request->all());

    return json_encode(['data' => 'ok','status' => $status]);

})->middleware('jwt.auth');


Route::get('/events', function (Request $request) {
    return $request->user()->events()->get();
})->middleware('jwt.auth');


Route::post('/session','AuthenticateController@authenticate');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
