import React from 'react';
const Dashbord = () => {
    return (
        <div class="content-wrapper">
            <section id="dashboard" class="dashboard section_gap">
                <div class="container">
                    <div class="section_title pt-5">
                        <h4 className='mt-4'><i class="fas pr-2 fa-tachometer-alt"></i> Dashboard</h4>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10 ">
                            <div class="dashboard_wrap ">
                                <div class="masking">
                                    <div class="row justify-content-center pb-2">
                                        <div class="col">
                                            <div class="item select_masking">
                                                <div class="form-group" data-select2-id="29">
                                                    <select class="form-control select2 " style={{ width: "100%" }}
                                                        data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                        <option selected="selected" data-select2-id="0">Select Masking
                                                        </option>
                                                        <option data-select2-id="36">Masking 1</option>
                                                        <option data-select2-id="37">Masking 2</option>
                                                        <option data-select2-id="38">Masking 3</option>
                                                        <option data-select2-id="39">Masking 4</option>
                                                        <option data-select2-id="40">Masking 5</option>
                                                        <option data-select2-id="41">Masking 6</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-cols-md-3">
                                        <div class="col">
                                            <div class="item">
                                                <div class="small-box bg-success">
                                                    <div class="inner">
                                                        <h3>1000</h3>
                                                        <p>Total SMS</p>
                                                    </div>
                                                    <div class="icon d-block">
                                                        <i class="fa-solid fa-message"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Col --> */}
                                        <div class="col">
                                            <div class="item">
                                                <div class="small-box bg-danger">
                                                    <div class="inner">
                                                        <h3>45</h3>
                                                        <p>Used SMS</p>
                                                    </div>
                                                    <div class="icon d-block">
                                                        <i class="fa-solid fa-message"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Col --> */}
                                        <div class="col">
                                            <div class="item">
                                                <div class="small-box bg-warning">
                                                    <div class="inner">
                                                        <h3>955</h3>
                                                        <p>Remaining SMS</p>
                                                    </div>
                                                    <div class="icon d-block">
                                                        <i class="fa-solid fa-message"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Slider  */}
            <section id="slider" class="slider section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-10">

                            {/* <!-- Swiper --> */}
                            <div class="swiper shadow-sm mb-5">
                                <p class="mb-2 text-muted text-bold text-left mt-5">AD</p>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="slide_inner">
                                            <a href="#">
                                                <img class="img-fluid" src="assets/images/banner/1.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slide_inner">
                                            <a href="#">
                                                <img class="img-fluid" src="assets/images/banner/2.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slide_inner">
                                            <a href="#">
                                                <img class="img-fluid" src="assets/images/banner/3.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slide_inner">
                                            <a href="#">
                                                <img class="img-fluid" src="assets/images/banner/4.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="slide_inner">
                                            <a href="#">
                                                <img class="img-fluid" src="assets/images/banner/5.png" alt="" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashbord;