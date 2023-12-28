import { BiCheckShield } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { MdSportsKabaddi } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
export default function WhatIsOffer() {
    return <div className="container">
        <div className="mx-5">
            <div className="row">
                <div className="col-md-7 col-sm-12 mt-5 pt-5">
                    <div>
                        <h3 className="mb-4">
                            What We Offer
                        </h3>
                        <p className="fs-7">
                            On her way she met a copy. The copy warned the Little Blind Text, that where it came
                            from it would have been rewritten a thousand times and everything that was left from
                            its origin would be the word.
                        </p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <BiCheckShield className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Safety First
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <FaBookReader className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Regular Classes
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <RiBillLine className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Certified Teachers
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <GiTeacher className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Sufficient Classrooms
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <MdOutlinePlayLesson className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Creative Lessons
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon-box">
                                        <MdSportsKabaddi className="ms-4 mt-4 icon-size offer-icon-size" />
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="service-content">
                                        <h4>
                                            Sports Facilities
                                        </h4>
                                        <p>
                                            Far far away, behind the word mountains, far from the countries Vokalia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
                <div className="col-md-5 col-sm-12">
                    <img src="images/about.jpg" className='offer-img' alt="offer image" />
                </div>
            </div>
        </div>
    </div>
}