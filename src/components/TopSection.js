import React from 'react';
import headshot from '../assets/img/headshot.jpg'
import './TopSection.css'
import '../App.css'
function TopSection() {



  return (

          <div  style={{paddingTop:'7rem'}}className="masthead bg-primary text-white text-center mb-0 pb-0">
              <div style={{margin:'0px',padding:'0px'}} className=" d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-3" src={headshot} alt="my headshot" style={{height:'19rem', width:'19rem', borderRadius:'75%'}} />

                  <h1 style={{fontSize:'250%'}} className="masthead-heading mb-0">Abdul Moid Munawar</h1>
                  {// Icon Divider-->
                  }
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-icon">
                      <div className="row mt-2">
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
                  </div>
                  {// Masthead Subheading-->
                  }
                  <p className="pre-wrap masthead-subheading font-weight-light mb-0">Full Stack Web Developer,
          Junior Undergraduate, University of Rochester
          Majoring in Computer Science and Economics</p>
              </div>


          </div>

        );
}

export default TopSection;
