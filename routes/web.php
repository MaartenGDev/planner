<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/{any}', function () {
    return view('app');
});

Route::get('/{any}/{placeholder}', function () {
    return view('app');
});
Route::get('/{any}/{event}/{placeholder}', function () {
    return view('app');
});
