@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Albums') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                        <a href="{{route('albums.create')}}" class="btn btn-success">Add</a>
                        <br><br>
                        <table class="table table-bordered">
                            <thead>
                                <th>
                                    id
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Pictures
                                </th>
                                <th>
                                    Actions
                                </th>
                            </thead>
                            <tbody>
                                @foreach ($albums as $album)
                                <tr>
                                    <td>
                                        {{$album->id}}
                                    </td>
                                    <td>
                                        {{$album->name}}
                                    </td>
                                    <td>
                                        <a href="{{ route('album_pictures',['id'=>$album->id]) }}" class="btn btn-warning"><i class="fas fa-eye"></i>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="{{ route('albums.edit',$album->id) }}" class="btn btn-primary"><i class="fas fa-edit"></i>
                                        </a>
                                        <a href="#" class="btn btn-danger"  data-toggle="modal" data-target="#deleteAlbum{{$album->id}}" class="dropdown-item"><i class="fa fa-trash"></i>
                                        </a>
                                        <div class="modal fade" id="deleteAlbum{{$album->id}}">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Album Delete</h4>

                                                    </div>
                                                    {!! Form::open([
                                                        'method' => 'POST',
                                                        'route' => ['delete_album', $album->id]
                                                        ]) !!}
                                                    <div class="modal-body">
                                                        Choose:
                                                        <input type="hidden" name="album_id" value="{{$album->id}}">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="choose" id="choose" value="all" checked>
                                                            <label class="form-check-label" for="all">
                                                                delete all the pictures in the album
                                                            </label>
                                                          </div>
                                                          <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="choose" id="choose" value="move">
                                                            <label class="form-check-label" for="exampleRadios2">
                                                                move the pictures to another album
                                                            </label>
                                                          </div>
                                                          <select id="album" class="form-control" name="move_to_album">
                                                            @foreach (\App\Models\Album::where('id','<>',$album->id)->get() as $a )
                                                            <option value="{{$a->id}}">{{$a->name}}</option>
                                                            @endforeach
                                                          </select>
                                                    </div>
                                                    <div class="modal-footer">

                                                {!! Form::submit('Yes', ['class' => 'btn btn-danger btn-flat']) !!}
                                                         <a class="btn btn-default" data-dismiss="modal">Cancel</a>
                                                {!! Form::close() !!}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        $('input[name="choose"]').click(function(){
            alert($(this).val());
        });
    </script>
@endsection
