import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Home() {
    const [, set] = useState()
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="row" style="margin: 5% 12% 5% 12%; display: flex">
                <div className="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">
                    <div className="card" style="width: 23rem;">
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary">View</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">
                    <div className="card" style="width: 23rem;">
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary">View</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">
                    <div className="card" style="width: 23rem;">
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary">View</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">
                    <div className="card" style="width: 23rem;">
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary">View</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">
                    <div className="card" style="width: 23rem;">
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary">View</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/*<div class="col-xl-4 col-sm-6 col-12" style="display: flex; margin-bottom: 3%">*/}
                {/*    <div class="card" style="width: 23rem;">*/}
                {/*        <img src="https://i.imgur.com/HuUb5GT.jpg" class="card-img-top" alt="..."/>*/}
                {/*            <div class="card-body">*/}
                {/*                <h5 class="card-title">Card title</h5>*/}
                {/*                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the*/}
                {/*                    card's content.</p>*/}
                {/*                <div class="text-end">*/}
                {/*                    <a href="#" class="btn btn-primary">View</a>*/}
                {/*                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
                {/*                        Delete*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"*/}
                {/*                     aria-hidden="true">*/}
                {/*                    <div class="modal-dialog">*/}
                {/*                        <div class="modal-content">*/}
                {/*                            <div class="modal-header">*/}
                {/*                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>*/}
                {/*                                <button type="button" class="btn-close" data-bs-dismiss="modal"*/}
                {/*                                        aria-label="Close"></button>*/}
                {/*                            </div>*/}
                {/*                            <div class="modal-body">*/}
                {/*                                ...*/}
                {/*                            </div>*/}
                {/*                            <div class="modal-footer">*/}
                {/*                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                {/*                                <button type="button" class="btn btn-danger">Delete</button>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
                <nav aria-label="Page navigation example">
                    <ul class="pagination" style="margin-left: 37%">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer/>
        </>
    );
}

export default Home;