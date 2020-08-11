import React from 'react';
import headshot from '../assets/img/headshot.jpg'
import './TopSection.css'
import '../App.css'
function TopSection() {



  return (

          <div className="masthead bg-primary text-white text-center mb-0 pb-0">
              <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={headshot} alt="my headshot" style={{height:'400px', width:'400px', borderRadius:'75%'}} />

                  <h1 className="masthead-heading mb-0">Abdul Moid Munawar</h1>
                  {// Icon Divider-->
                  }
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                              <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                              </svg>
                      </div>
                      <div className="divider-custom-line"></div>
                  </div>
                  {// Masthead Subheading-->
                  }
                  <p className="pre-wrap masthead-subheading font-weight-light mb-0">Full Stack Web Developer,
          Junior Undergraduate, University of Rochester
          Majoring in Computer Science and Economics</p>
              </div>

                      <div className="row mt-5">
                          <div className="col-lg-12 mb-5 mb-lg-0">
                              <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/a.moid10" target="_blank"><i className="fa fa-facebook"></i></a>
                              <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/AbdulMoidM/" target="_blank"><i className="	fa fa-linkedin"></i></a>
                              <a className="btn btn-outline-light btn-social mx-1" href="https://www.github.com/AbdulMoidM" target="_blank"><i className="fa fa-github"></i></a>
                          </div>
                          {// Footer Location-->
                          }

                          {// Footer Social Icons-->
                          }

                          {// Footer About Text-->
                          }

                      </div>
          </div>

        );
}

export default TopSection;
