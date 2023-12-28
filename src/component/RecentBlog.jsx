import { IoMdText } from "react-icons/io";
export default function RecentBlog() {
    return <section className='bg-light py-5'>
        <div className="container py-5">
            <div className='row text-center'>
                <h1 className="pt-5 pb-4">
                    Recent Blog
                </h1>
                <p className="w-75 fs-7 m-auto">
                    Separated they live in. A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country
                </p>
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="card border-0">
                            <img src="images/image_1.jpg" className='img-size-card' alt="blog-image" />
                            <div className='img-calander'>
                                <h3>26</h3>
                                <div>June</div>
                                <div>2019</div>
                            </div>
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title">
                                    Skills To Develop Your Child Memory
                                </h5>
                                <p className="fs-7 lh-lg mb-4">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <a href="#" className="btn-orange">Read More</a>
                                <a href=""className='float-end text-decoration-none text-secondary ms-2'><IoMdText/>3</a>
                                <a href="#" className='primary-text text-decoration-none float-end'>Admin</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card border-0">
                            <img src="images/image_1.jpg" className='img-size-card' alt="blog-image" />
                            <div className='img-calander'>
                                <h3>26</h3>
                                <div>June</div>
                                <div>2019</div>
                            </div>
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title">
                                    Skills To Develop Your Child Memory
                                 </h5>
                                <p className="fs-7 lh-lg mb-4">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <a href="#" className="btn-orange">Read More</a>
                                <a href=""className='float-end text-decoration-none text-secondary ms-2'><IoMdText/>3</a>
                                <a href="#" className='primary-text text-decoration-none float-end'>Admin</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card border-0">
                            <img src="images/image_1.jpg" className='img-size-card ' alt="blog-image" />
                            <div className='img-calander'>
                                <h3>26</h3>
                                <div>June</div>
                                <div>2019</div>
                            </div>
                            <div className="card-body p-4 text-start">
                                <h5 className="card-title">
                                    Skills To Develop Your Child Memory
                                </h5>
                                <p className="fs-7 lh-lg mb-4">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <a href="#" className="btn-orange">Read More</a>
                                <a href=""className='float-end text-decoration-none text-secondary ms-2'><IoMdText/>3</a>
                                <a href="#" className='primary-text text-decoration-none float-end'>Admin </a>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}