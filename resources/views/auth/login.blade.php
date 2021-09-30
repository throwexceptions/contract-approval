@extends('layouts.auth')

@section('content')
    <main class="d-flex w-100">
        <div class="container d-flex flex-column">
            <div class="row vh-100">
                <div class="col-sm-10 col-md-5 mx-auto d-table h-100">
                    <div class="d-table-cell align-middle">
                        <div class="text-center mt-4">
                            <img src="{{ asset('img/polo-logo-thumb.png') }}" width="20%">
                            <h1 class="h2 mt-3">C.C.M.</h1>
                            <p class="lead">
                                Contract & Case Management
                            </p>
                        </div>
                        <div class="card">
                            <div class="card-body m-3">
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="mb-3">
                                        <label class="form-label">Email</label><input id="email" type="email"
                                                                                      class="form-control @error('email') is-invalid @enderror"
                                                                                      name="email"
                                                                                      value="{{ old('email') }}"
                                                                                      required autocomplete="email"
                                                                                      autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input id="password" type="password"
                                               class="form-control @error('password') is-invalid @enderror"
                                               name="password"
                                               required autocomplete="current-password">

                                        @error('password')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror

                                        <small>
                                            @if (Route::has('password.request'))
                                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                                    {{ __('Forgot Your Password?') }}
                                                </a>
                                            @endif
                                        </small>
                                    </div>
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember"
                                                   id="remember" {{ old('remember') ? 'checked' : '' }}>

                                            <label class="form-check-label" for="remember">
                                                {{ __('Remember Me') }}
                                            </label>
                                        </div>
                                        <div class="text-center mt-3">
                                            <button type="submit" class="btn btn-primary">
                                                {{ __('Login') }}
                                            </button>
                                            <!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> -->
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
