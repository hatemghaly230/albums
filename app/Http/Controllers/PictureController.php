<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;

class PictureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //dd('dd');
        $id=isset($_GET['id'])?$_GET['id']:null;
        $pictures=Picture::where('album_id',$id)->paginate(10);
        return view('pictures.index',compact('pictures','id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pictures.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data =array();
        $data['name'] =$request->name;
        $data['album_id'] =$request->album_id;

        if ($request->file('picture')) {
            $picture = $request->file('picture');
            $filename = date('YmdHi') . $picture->getClientOriginalName();
            $picture->move(public_path('pictures'), $filename);
            $data['picture'] =$filename;
        }
       // dd($data);
        Picture::create($data);
        return redirect()->route('album_pictures',['id'=> $data['album_id']]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Picture  $picture
     * @return \Illuminate\Http\Response
     */
    public function show(Picture $picture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Picture  $picture
     * @return \Illuminate\Http\Response
     */
    public function edit(Picture $picture,$id)
    {
       // dd($picture);
        $picture=Picture::find($id);
        return view('pictures.edit',compact('picture'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Picture  $picture
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =array();
         $data['name'] =$request->name;
        $edit_pic=Picture::find($id);
        if ($request->file('picture')) {
            $picture = $request->file('picture');
            $filename = date('YmdHi') . $picture->getClientOriginalName();
            $picture->move(public_path('pictures'), $filename);
            $data['picture'] =$filename;
        }
        $edit_pic->update($data);
       return redirect()->route('album_pictures',['id'=> $edit_pic->album_id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Picture  $picture
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $picture=Picture::find($id);
        $picture->delete();
        return redirect()->back();

    }
}
