export default function RequestForm() {
    return <section className='request-form-image'>
        <div className="request-form-overlay"></div>
        <div className="container">
        <div className="row position-relative">
            <div className="offset-md-7 col-md-5  text-light">
                <h2 className="mb-5 h1">Request A Quote</h2>
                <p className="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                </p>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="email" className="input text-light" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="input text-light" placeholder="Last Name" />
                        </div>
                        <select className="col-md-6 input text-light">
                            <option value="" className="bg-dark">Select Your Course</option>
                            <option value="" className="bg-dark">computer</option>
                            <option value="" className="bg-dark">history</option>
                            <option value="" className="bg-dark">english</option>
                            <option value="" className="bg-dark">math</option>
                        </select>
                        <div className="col-md-6">
                            <input type="number" className="input text-light" placeholder="Phone" />
                        </div>
                        <div className="col-md-6">
                            <textarea type="text" className="input text-light" placeholder="Message" />
                        </div>
                        <div className="col-md-6">
                            <input type="submit" value='submit' className="btn-orange-big" placeholder="Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </section>
}