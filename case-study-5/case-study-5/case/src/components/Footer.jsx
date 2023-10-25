import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        <div className="container my-5">
            <footer className="text-white text-center text-lg-start bg-dark">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About Our Resort</h5>

                            <p>
                                Furama Resort offers over 30 all-inclusive hotels and resorts on or near the beach in eight inspiring coastal countries.
                                Our collective hotels provides a memorable vacation experience for everyone – from families and groups seeking to reconnect to couples and solo travellers.
                            </p>

                            <p>
                                Each destination in the Furama portfolio has its own unique style and character,
                                commiting to providing unforgettable experience in an all-inclusive setting in which every wish and desire
                                for the perfect vacation come true.
                            </p>

                            <div className="mt-lg-4">
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-dribbble"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i
                                    className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                            <div className="form-outline form-white mb-4">
                                <input type="text" id="formControlLg" className="form-control form-control-lg"/>
                                <label className="form-label" for="formControlLg">Search</label>
                            </div>

                            <ul className="fa-ul">
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span>
                                    <span className="ms-2">280 Tran Hung Dao, Da Nang</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span
                                    className="ms-2">thien97.night1@gmail.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                <tr>
                                    <td>Mon - Sat:</td>
                                    <td>24/7</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>6am - 23pm</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3">
                    © 2023 C0523G1:
                     Le Cong Hoan Thien
                </div>
            </footer>

        </div>
    );
}

export default Footer;