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
        $tiles = Tile::select('tiles.*', 'users.username AS created_by')
            ->join('users', 'users.id', '=', 'tiles.user_id')
            ->get();
        return response()->json([
            'data' => $tiles,
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
        $tile = new Tile;
        $tile->name = request('name');
        $tile->single = request('single');
        $tile->image = request('image');
        $tile->audio = request('audio');
        $tile->user_id = request('user_id');
        $tile->save();

        // TO DELETE, BUT SAVING TO REVIEW: Wanted to work at higher level of abstraction and use ORM for what it's made for. save() method is idiomatic.
        // $id = Tile::insert([
        //     'name' => request('name'),
        //     'single' => request('single'),
        //     'image' => request('image'),
        //     'audio' => request('audio'),
        //     'user_id' => 0,
        // ])->id();

        return response()->json([
            'data' => $tile,
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
