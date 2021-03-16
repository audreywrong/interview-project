<?php

namespace App\Http\Controllers;

use App\Models\Tile;
use Illuminate\Http\Request;

class TileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json([
            'data' => Tile::get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = Tile::insert([
            'name' => request('name'),
            'single' => request('single'),
            'image' => request('image'),
            'audio' => request('audio'),
            'user_id' => 0,
        ])->id();

        return response()->json([
            'data' => $id,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function show(Tile $tile)
    {
        return response()->json([
            'data' => $tile,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tile $tile)
    {
        $tile->update([
            'name' => request('name'),
            'single' => request('single'),
            'image' => request('image'),
            'audio' => request('audio'),
            'user_id' => 0,
        ]);
        return response()->json([
            'data' => $tile->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tile  $tile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tile $tile)
    {
        $tile->destroy();
        return response()->json([
            'data' => '💣',
        ]);
    }
}
