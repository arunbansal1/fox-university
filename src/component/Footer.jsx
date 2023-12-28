import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineSpeakerNotes } from "react-icons/md";
export default function Footer() {
    return <section className="footer-bg text-white">
        <div className="container p-5">
            <div className='row'>
                <div className="col-md-3 col-sm-12">
                    <h4>
                        Have a Questions?
                    </h4>
                    <ul className="footer mt-5">
                        <li className="d-flex">
                            <span className="pe-4 fs-5">
                                <FaLocationDot />
                            </span>
                            <span>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </span>
                        </li>
                        <li className='d-flex'>
                            <span className='pe-4 fs-5'>
                                <IoCall />
                            </span>
                            <span className='mt-2'>
                                +2 392 3929 210
                            </span>
                        </li>
                        <li className='d-flex'>
                            <span className='pe-4 fs-5'>
                                <IoMail />
                            </span>
                            <span className='mt-1'>
                                info@yourdomain.com
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4>
                        Recent Blog
                    </h4>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <img src="images/image_1.jpg" className=' footer-img' alt="" />
                        </div>
                        <div className="col-md-6 ps-0">
                            <h6>
                                Even the all-powerful Pointing has no control about
                            </h6>
                            <div>
                                <span><SlCalender className="footer-icon me-2" /></span>
                                <span>June 27,2019</span>
                            </div>
                            <div>
                                <span><FaUserAlt className='footer-icon me-2' /></span>
                                <span>Admin <MdOutlineSpeakerNotes className="footer-icon mx-1" />19</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <img src="images/image_1.jpg" className=' footer-img' alt="" />
                        </div>
                        <div className="col-md-6 ps-0">
                            <h6>
                                Even the all-powerful Pointing has no control about
                            </h6>
                            <div>
                                <span><SlCalender className="footer-icon me-2" /></span>
                                <span>June 27,2019</span>
                            </div>
                            <div>
                                <span><FaUserAlt className='footer-icon me-2' /></span>
                                <span>Admin <MdOutlineSpeakerNotes className="footer-icon mx-1" />19</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4>
                        Links
                    </h4>
                    <ul className="footer-links mt-5 p-0">
                        <li>
                            <a href="#" className="footer-link"><IoIosArrowRoundForward className='me-2' />Home</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link"><IoIosArrowRoundForward className='me-2' />About</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link"><IoIosArrowRoundForward className='me-2' />Services</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link"><IoIosArrowRoundForward className='me-2' />Departments</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link"><IoIosArrowRoundForward className='me-2' />Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4>
                        Subscribe Us!
                    </h4>
                    <div className='mt-5'>
                        <form>
                             <input type="email" className='footer-input-type footer-input' placeholder="Enter email address"/>
                             <input type="button" value='Subscribe' className='footer-input-button footer-input mt-2' placeholder="Enter email address"/>
                        </form>
                    </div>
                    <div>
                        <h2>
                            Connect with Us
                        </h2>
                        <div className="mt-5 ms-3">
                            <span className="footer-socialmedia-link mx-2 p-3"><FaTwitter /></span>
                            <span className="footer-socialmedia-link mx-2 p-3"><FaFacebookF /></span>
                            <span className="footer-socialmedia-link mx-2 p-3"><FaInstagram /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">Copyright ©2023 All rights reserved | This template is made with  by Colorlib</div>
        </div>
    </section>
}