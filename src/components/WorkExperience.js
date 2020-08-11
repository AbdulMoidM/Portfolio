import React from 'react';
import {Link} from 'react-router-dom';
import '../css/WorkExperience.css'

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
                      <p className='work'ath d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <div className="divider-custom-line"></div>
                </div>
                {// Portfolio Grid Items-->
                }
                <div className="row justify-content-center">
                    {// Portfolio Items-->
                    }
                    <div className="col-md-6 col-lg-4 mb-5">
                      <a href="https://yoloshadow.com" target="_blank">
                          <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel0">
                              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                  <div className="portfolio-item-caption-content text-center text-white">
                                      <img src="https://img.icons8.com/ios/50/000000/connection-status-off.png"/>
                                  </div>
                              </div>
                              <h5 className='work'>
                              Full Stack Web Engineer
                              </h5>
                              <p className='work'> <i><b>YoloShadow</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>Oct’19 –present</i> </p>
  <p className='work'>
  •	Coded 50% of the frontend of the pilot website using React, Redux, and Bootstrap 4, while collaborating with UI Designer<br/>
  •	Developed part of the backend using Nodejs, REST APIs, Mongoose, and GitHub.<br/>
  •	Linked Google Analytics and Google Search Console to company’s website and optimized website tags for SEO

                              </p>
                          </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                       <a href="https://machinteraction.ur.rochester.edu/SmileyDiscovery" target="_blank">
                          <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#workModel0">
                              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                  <div className="portfolio-item-caption-content text-center text-white">
                                      <img src="https://img.icons8.com/ios/50/000000/connection-status-off.png"/>
                                  </div>
                              </div>
                              <h5 className='work'>
                              Research Assistant and Front-end Web Developer
                              </h5>
                              <p className='work'> <i><b>Professor Zhen Bai, University of Rochester</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>May'20 –present</i> </p>
  <p className='work'>
  •	Assisted Professor Bai with AI4K12 project that aims to facilitate teaching machine learning to K12 students<br/>
  •	Developed front-end of website that will be used for a pilot study on students and teachers using React, Redux, D3 (for SVGs and animations), and Bootstrap 4 libraries.<br/>
  •	Developed design improvements for website and study structure based on relevant research paper readings.

                              </p>
                          </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">

                              <h5 className='work'>
                              Residential Advisor
                              </h5>
                              <p className='work'> <i><b>University of Rochester</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>May'20 -present</i> </p>
  <p className='work'>
  •	Implement programs to aid the social, academic, and personal adjustment of students to the residence and University<br/>
•	Conduct regular rounds of buildings to ensure there is compliance with all building and student safety guidelines.


                              </p>

                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">

                              <h5 className='work'>
                              Teaching Assistant-Data Structures & Algorithms (CSC 172)
                              </h5>
                              <p className='work'> <i><b>University of Rochester</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>Aug'19 -Dec'19</i> </p>
  <p className='work'>
  •	Offered guidance for coding assignments during lab sessions and graded assignments and projects of a share of students

                              </p>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">

                              <h5 className='work'>
                              Teaching Assistant -Intermediate Microeconomics (ECO 207)
                              </h5>
                              <p className='work'> <i><b>University of Rochester</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>Aug'19 -Dec'19</i> </p>
  <p className='work'>
•   Conducted review sessions before mid-terms for a class of 150 students. Guided students during weekly office hours

                              </p>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">

                              <h5 className='work'>
                              Peer Tutor
                              </h5>
                              <p className='work'> <i><b>CETL, University of Rochester</b> -  Rochester, NY</i> </p>
                              <p className='work'> <i>Aug'19 -present</i> </p>
  <p className='work'>
  •	Answer questions and develop student’s concepts in Calculus-I & II, Microeconomics, and Data Structures & Algorithms

                              </p>

                    </div>



                    
                </div>
            </div>
        </section>
        {// Portfolio Modal-->
        }



        </React.Fragment>


  );
}
