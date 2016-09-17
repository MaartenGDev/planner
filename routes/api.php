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
Route::get('/event/{id}','EventController@edit')
    ->middleware('jwt.auth');

Route::delete('event/{event}','EventController@delete')
    ->middleware('jwt.auth');

Route::patch('/event/{event}','EventController@patch')
    ->middleware('jwt.auth');

Route::post('/event/','EventController@create')
    ->middleware('jwt.auth');

Route::get('/events', 'EventController@index')
    ->middleware('jwt.auth');

Route::post('/session','AuthenticateController@authenticate');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
