import React from 'react';

const Slider = () => {
    return (
        <div>
            <section id="slider" class="slider section_gap">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-10">

                            {/* <!-- Swiper --> */}
                            <div class="swiper shadow-sm">
                                <p class="mb-2 text-muted text-bold">AD</p>
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

export default Slider;