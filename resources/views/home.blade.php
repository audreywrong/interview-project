@extends('layouts.app')

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @auth
    <script>
        var GUSER = {{ Auth::user()->id }};
    </script>
    @endauth



</head>

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <script defer src="{{ asset('/js/app.js') }}"></script>
            <style src="{{ asset('/css/app.css') }}"></style>
            <div class="antialiased">
                <div id="profile"></div>
            </div>
            <div class="antialiased">
                <div id="band-form"></div>
            </div>
        </div>
    </div>

</div>
@endsection