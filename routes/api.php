<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\TileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::any('/test', function (Request $request) {
    $data = json_decode('{
        "discussion": 1156651487.379289,
        "song": "appearance",
        "congress": -711955873,
        "difficulty": {
          "grade": false,
          "like": "shadow",
          "price": -860806398,
          "drawn": 1274897875.5733166,
          "opposite": {
            "have": true,
            "so": true,
            "wise": true,
            "son": "wash",
            "getting": "cat",
            "we": false
          },
          "fought": "couple"
        },
        "too": -1919765016.0258815,
        "year": 1233461737.3856227
       }');
    return response()->json([
        'data' => $data,
    ]);
});

Route::any('/push', [TestController::class, 'store']);
Route::get('/fetch/tiles', [TileController::class, 'index']);
Route::get('/fetch/tile/{id}', [TileController::class, 'show']);
Route::post('/store/tile', [TileController::class, 'store']);
Route::post('/update/tile/{id}', [TileController::class, 'update']);
Route::post('/destroy/tile/{id}', [TileController::class, 'destroy']);
