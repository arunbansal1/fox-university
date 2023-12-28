import { IoSearch } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
export default function Header() {
    return <>
        <div className="container">
            <div className="row">
                <div className="offset-md-1 col-sm-10">
                    <div className='row my-3 text-center text-md-start'>
                        <div className='col-md-4'>
                            <a href="#" className='text-decoration-none text-uppercase text-black font'>
                                fox.
                                <h6>university</h6>
                            </a>
                        </div>
                        <div className='col-md-3 d-md-flex'>
                            <div className='pt-3 me-2 color-icon fs-4'>
                                <FaTelegramPlane className='' />
                            </div>
                            <div>
                                <span className='fw-bold d-block'>Email</span>
                                <span>youremail@email.com</span>
                            </div>
                        </div>
                        <div className='col-md-3 d-md-flex'>
                            <div className='fs-4 color-icon'>
                                <IoMdCall />
                            </div>
                            <div>
                                <span className='d-block fw-bold'>
                                    Call
                                </span>
                                <span>
                                    Call Us: + 1235 2355 98
                                </span>
                            </div>
                        </div>
                        <div className='col-md-2 text-md-end'>
                            <button className='button mt-3'>Apply now</button>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark navbar-expand-lg m-auto">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav py-2">
                                    <li className="nav-item">
                                        <a className="nav-link text-danger" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Courses</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Staff</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Contact</a>
                                    </li>
                                </ul>
                                <div className="input-group flex-nowrap ms-auto w-lg-25 border rounded-pill">
                                    <input type="text" className="type form-control bg-transparent border-0 text-white ps-4" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <span className="input-group-text bg-transparent border-0" id="addon-wrapping"><IoSearch className='text-light' /></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </>
}