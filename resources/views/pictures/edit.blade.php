@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Edit Picture</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <table class="table table-bordered">
                            <form method="post" action="{{ route('album_pictures.update',$picture->id) }}" enctype="multipart/form-data">
                                @method('PUT')
                                @csrf
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" name="name"
                                        aria-describedby="emailHelp" placeholder="Enter name" value="{{ $picture->name }}">
                                </div>
                                <br>

                               <img src="{{asset('pictures/').'/'.$picture->picture}}" width="100" height="100">
                                <div class="mb-3">
                                    <label for="picture" class="form-label">Upload Picture</label>
                                    <input name="picture" class="form-control" type="file" id="picture">
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
