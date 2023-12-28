import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { BiCloudRain } from "react-icons/bi";
import Counter from "./Counter";
export default function FoxUniversity({ number, title }) {
    return <section>
        <div className="fox-university-image">
            <div className='fox-university-overlay'></div>
            <div className="container position-relative">
                <div className="fox-university-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="fox-university-center-container position-relative h-100 pb-sm-0 pb-3">
                                <img src="images/about-2.jpg" className='fox-university-center-images' alt="for-univeristy-center-image" />
                                <div className="fox-university-video-image">
                                    <a href="https://vimeo.com/45830194">
                                        <FaPlay />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="ms-5 px-4">
                                <h2 className="fs-1 fw-bold pb-4 ">
                                    Fox University
                                </h2>
                                <p className="fs-7 fox-university-description">
                                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </p>
                                <p className="fs-7 fox-university-description">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic
                                    country, in which roasted parts of sentences fly into your mouth.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3 text-center" id='teacher'>
                            <h2>
                                <Counter number={18} />
                            </h2>
                            <p className="text-capitalize">certified teacher</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h2>
                                <Counter number={401} />
                            </h2>
                            <p className="text-capitalize">students</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h2>
                                <Counter number={30} />
                            </h2>
                            <p className="text-capitalize">courses</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h2>
                                <Counter number={50} />
                            </h2>
                            <p className="text-capitalize">award won</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}