<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::resource('albums', 'App\Http\Controllers\AlbumController', [
    'names' => [
        'index' => 'albums',
        'store' => 'albums.store',
        'edit' => 'albums.edit',
        'update' => 'albums.update'
    ]
]);
Route::resource('pictures', 'App\Http\Controllers\PictureController', [
    'names' => [
        'index' => 'pictures',
        'store' => 'pictures.store',
        'edit' => 'pictures.edit',
        'update' => 'pictures.update'
    ]
]);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
