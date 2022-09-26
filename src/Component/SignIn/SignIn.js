import React from 'react';

const SignIn = () => {
    return (
        <div>
            <div class="signin vh-100 pt-5">
                <section class="d-flex align-items-center bg-solid">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <div class="card shadow p-3 p-md-5">
                                    <div class="logos">
                                        <div class="dsms_logo">
                                            <img src="assets/images/logo/logo.png" alt="DSMS Logo" />
                                        </div>
                                        <div class="dit_logo">
                                            <img src="assets/images/logo/dit_logo.png" alt="DIT Logo" />
                                        </div>
                                    </div>

                                    <h4 class="text-center">Login</h4>
                                    <div class="card-body pb-0">
                                        <div class="inputs">
                                            <div class="input-group mb-4">
                                                <span class="input-group-text user-icon" id="basic-addon1"><i class="fa-solid fa-phone"></i></span>
                                                <input type="number" class="form-control" placeholder="Enter Mobile Number" />
                                            </div>
                                            <div class="input-group mb-4">
                                                <span class="input-group-text" id="basic-addon2"><i class="fas fa-unlock-alt"></i></span>
                                                <input type="password" class="form-control password" id="password" placeholder="Enter Your Pin" />
                                                <span class="input-group-text show-pass" onclick="password_show_hide('password', 'show_eye', 'hide_eye')">
                                                    <i class="fas fa-eye d-none" id="hide_eye"></i>
                                                    <i class="fas fa-eye-slash " id="show_eye"></i>
                                                </span>
                                            </div>
                                            <div class="d-flex justify-content-center align-items-center mt-4">
                                                <div class="">
                                                    <a href="otp.html" class="link text-right text-decoration-underline">Forgot PIN</a>
                                                </div>
                                            </div>
                                            <div class="d-grid mt-4">
                                                <div class="button-primary text-center">
                                                    <a href="#" class="btn primary_btn d-block">LOGIN <i class="ps-1 fa-solid fa-arrow-right-to-bracket"></i></a>
                                                </div>
                                                <div class="text-center mt-4">
                                                    <span>Don't have an account? <a class="link ms-2 text-decoration-underline" href="signup.html">Sign Up</a></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SignIn;