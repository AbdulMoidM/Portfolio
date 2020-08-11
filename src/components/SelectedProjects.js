import React from 'react';
import streetMap from '../assets/img/shortest-path-example.PNG'
import lstm from '../assets/img/Lstm.PNG'
import checkers from '../assets/img/checkers.PNG'




export default function SelectedProjects() {

  return (
        <React.Fragment>
        <section className="page-section portfolio" id="project">
            <div className="container">
                {// Portfolio Section Heading-->
                }
                <div className="text-center">
                    <h2 className="page-section-heading text-secondary mb-0 d-inline-block">Selected Projects</h2>
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
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <img src="https://img.icons8.com/ios/50/000000/connection-status-off.png"/>
                                </div>
                            </div>
                            <h5> Street Mapping </h5>
                            <img className="img-fluid" src={streetMap} alt="Street Mapping"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <img src="https://img.icons8.com/ios/50/000000/connection-status-off.png"/>
                                </div>
                            </div>
                            <h5> Time-series forecasting using LSTM Models for predicting change in US GDP </h5>
                            <img className="img-fluid" style={{height:'14rem'}} src={lstm} alt="Street Mapping"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <img src="https://img.icons8.com/ios/50/000000/connection-status-off.png"/>
                                </div>
                            </div>
                            <h5> AI Checkers </h5>
                            <img className="img-fluid" style={{height:'17rem'}} src={checkers} alt="AI Checkers"/>
                        </div>
                    </div>



                </div>
            </div>
        </section>
        {// Portfolio Modal-->
        }


        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal0" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal0Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Street Mapping</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={streetMap} style={{height:'20%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-1">
                                    Built using Java, this project draws maps of areas provided as txt files using JFrames, and finds shortest paths between two points using Dijkstra's algorithm.
                                    </p>
                                    <div>
                                     <a href="https://github.com/AbdulMoidM/street-Mapping" target="blank">Github Link <br/></a>
                                     </div>
                                    <button className="btn btn-primary mt-3" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" style={{height:'43rem'}} id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal1Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 style={{fontSize:'170%'}}className="portfolio-modal-title text-secondary mb-0">
                                        Time-series forecasting using LSTM Models for predicting change in US GDP
                                    </h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={lstm} style={{height:'18%'}} alt="lstm"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p  className="mb-1">
                                    This project was to predict the changes in US GDP after the onset of COVID-19.<br/> Keras, an open source neural-network library, was used to train different LSTM models and choose the best performing model based on their average normalized RMSE.
<br/>For the models' inputs, we acquired stock, US treasury, and GDP data from Quandl and processed it using Python scripts (details & codebase in link).
                                    </p>

                                    <div>
                                      <a href="https://medium.com/@amunawar_3973/time-series-multi-step-forecasting-using-lstm-modelling-for-us-gdp-in-times-of-covid-19-f59970c93778" target="blank" >Medium Article <br/></a>
                                    </div>
                                    <div>
                                      <a href="https://github.com/AbdulMoidM/Time-series-multi-step-forecasting-using-LSTM-Modelling-for-US-GDP" target="blank" >Github Link <br/></a>
                                     </div>

                                    <button className="btn btn-primary mt-3" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal2Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">AI Checkers</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-3" src={checkers} style={{height:'30%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-1">
                                    A Checkers game thatI coded with two partners using Java. The games allows users to play against the computer/AI which uses the MINIMAX algorithm with alpha-beta pruning
                                    </p>
                                    <div>
                                     <a href="https://github.com/AbdulMoidM/AI-Checkers-in-Java" target="blank">Github Link <br/></a>
                                     </div>
                                    <button className="btn btn-primary mt-5" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal3Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Street Mapping</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={streetMap} style={{height:'20%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">
                                    Built using Java, this project draws maps of areas provided as txt files using JFrames, and finds shortest paths between two points using Dijkstra's algorithm.
                                    </p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal4Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Street Mapping</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={streetMap} style={{height:'20%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">
                                    Built using Java, this project draws maps of areas provided as txt files using JFrames, and finds shortest paths between two points using Dijkstra's algorithm.
                                    </p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Street Mapping</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={streetMap} style={{height:'20%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">
                                    Built using Java, this project draws maps of areas provided as txt files using JFrames, and finds shortest paths between two points using Dijkstra's algorithm.
                                    </p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="portfolio-modal modal fade" style={{height:'41rem'}} id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>

                      </span>
                    </button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {// Portfolio Modal - Title-->
                                    }
                                    <h2 className="portfolio-modal-title text-secondary mb-0">Street Mapping</h2>
                                    {// Icon Divider-->
                                    }
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {// Portfolio Modal - Image-->
                                    }<img className="img-fluid rounded mb-5" src={streetMap} style={{height:'20%'}} alt="Street Mapping"/>
                                    {// Portfolio Modal - Text-->
                                    }
                                    <p className="mb-5">
                                    Built using Java, this project draws maps of areas provided as txt files using JFrames, and finds shortest paths between two points using Dijkstra's algorithm.
                                    </p>
                                    <button className="btn btn-primary" href="#" data-dismiss="modal">
                                        Close Window
                                    </button>
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
