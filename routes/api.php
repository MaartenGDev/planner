<?php

use App\Event;
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

Route::get('/events', function (Request $request) {
    return Event::all();
})->middleware('auth:api');

Route::post('/session','AuthenticateController@authenticate');

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
