import React from 'react';


export default function WorkExperience() {

  return (
        <React.Fragment>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {// Portfolio Section Heading-->
                }
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary mb-0 d-inline-block">Work Experience</h2>
                </div>
                {// Icon Divider-->
                }
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className="divider-custom-line"></div>
                </div>
                {// Portfolio Grid Items-->
                }
                <div className="row justify-content-center">
                    {// Portfolio Items-->
                    }
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel0">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="Log Cabin"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/cake.png" alt="Tasty Cake"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/circus.png" alt="Circus Tent"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/game.png" alt="Controller"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/safe.png" alt="Locked Safe"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div><img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="Submarine"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {// Portfolio Modal-->
        }
        <div className="portfolio-modal modal fade" id="workModel0" tabindex="-1" role="dialog" aria-labelledby="#workModel0Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Log Cabin</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="Log Cabin"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="workModel1" tabindex="-1" role="dialog" aria-labelledby="#workModel1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Tasty Cake</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="Tasty Cake"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="workModel2" tabindex="-1" role="dialog" aria-labelledby="#workModel2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Circus Tent</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="Circus Tent"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="workModel3" tabindex="-1" role="dialog" aria-labelledby="#workModel3Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Controller</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="Controller"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="workModel4" tabindex="-1" role="dialog" aria-labelledby="#workModel4Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Locked Safe</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="Locked Safe"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" id="workModel5" tabindex="-1" role="dialog" aria-labelledby="#workModel5Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Submarine</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="Submarine"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>


  );
}
