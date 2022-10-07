@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Pictures') }}</div>

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
                                    picture
                                </th>
                                <th>
                                    Actions
                                </th>
                            </thead>
                            <tbody>
                                @foreach ($pictures as $picture)
                                <tr>
                                    <td>
                                        {{$picture->id}}
                                    </td>
                                    <td>
                                        {{$picture->name}}
                                    </td>
                                    <td>
                                        {{$picture->name}}
                                    </td>
                                    <td>
                                        <a href="{{ route('albums.edit',$picture->id) }}" class="btn btn-primary"><i class="fas fa-edit"></i>
                                        </a>
                                        <a href="#" class="btn btn-danger"  data-toggle="modal" data-target="#deleteAlbum{{$picture->id}}" class="dropdown-item"><i class="fa fa-trash"></i>
                                        </a>
                                        <div class="modal fade" id="deleteAlbum{{$picture->id}}">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Album Delete</h4>

                                                    </div>
                                                    <div class="modal-body">
                                                        Are you Sure?
                                                    </div>
                                                    <div class="modal-footer">
                                                        {!! Form::open([
                                               'method' => 'DELETE',
                                               'route' => ['albums.destroy', $picture->id]
                                               ]) !!}
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
@endsection
