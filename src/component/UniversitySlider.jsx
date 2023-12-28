import { GrUserFemale } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
export default function UniversitySlider() {
  return <section>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner img-carousel">
        <div className="carousel-item active">
          <img src="images/bg_1.jpg" className="d-block w-100" alt="..." />
          <div className='carousel-inner-overlay'></div>
         <div className="container">
         <div className='text-capitalize carousel-inner-content row'>
            <div className='col-md-8'>
              <h1 className='carousel-inner-header'>Education Needs Complete Solution</h1>
              <p className='carousel-inner-description fs-6 my-4'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <p className='mt-5'>
                  <a href="#" className='slider-button'>Contact Us</a>
                </p>
            </div>
          </div>
         </div>
        </div>
        <div className="carousel-item">
          <img src="images/bg_2.jpg" className="d-block w-100" alt="..." />
          <div className='carousel-inner-overlay'></div>
          <div className='container'>
            <div className='text-capitalize carousel-inner-content row'>
              <div className='col-md-8'>
                <h1 className='carousel-inner-header'>University, College School Education</h1>
                <p className='carousel-inner-description fs-6 my-4'>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <p className='mt-5'>
                  <a href="#" className='slider-button'>Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
       <div className='row text-white'>
          <div className='col-md-3 text-center primary-bg p-6 px-5 fs-6'>
            <GrUserFemale className="icon-size mb-4"/>
             <h4 className="text-capitalize">certified teachers</h4>
             <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className='col-md-3 text-center primary-bg2 p-6 px-5 fs-6'>
          <FaBookReader className="icon-size mb-4"/>
             <h4 className="text-capitalize">Special Education</h4>
             <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className='col-md-3 text-center primary-bg p-6 px-5 fs-6'>
             <FaBook className="icon-size mb-4"/>
             <h4 className="text-capitalize">Book & Library</h4>
             <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className='col-md-3 text-center primary-bg2 p-6 px-5 fs-6'>
             <RiBillLine className="icon-size mb-4"/>
             <h4 className="text-capitalize">Sport Clubs</h4>
             <p className="fs-7">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
       </div>
    </div>
  </section>
}