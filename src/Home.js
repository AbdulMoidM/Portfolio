import React from 'react';

import './App.css';
import Navbar from './components/Navbar'
import TopSection from './components/TopSection'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import SelectedProjects from './components/SelectedProjects'



function Home() {

return(
                <div>
              <Navbar/>
              <TopSection/>
              <About/>

              <WorkExperience/>
              <SelectedProjects/>
              <section className="page-section" id="contact">
                  <div className="container">
                      {// Contact Section Heading-->
                      }
                      <div className="text-center">
                          <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                      </div>
                      {// Icon Divider-->
                      }
                      <div className="divider-custom">
                          <div className="divider-custom-line"></div>
                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                          <div className="divider-custom-line"></div>
                      </div>
                      {// Contact Section Content-->
                      }
                      <div className="row justify-content-center">
                          <div className="col-lg-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="icon-contact mb-3"><i className="fas fa-mobile-alt"></i></div>
                                  <div className="text-muted">Phone</div>
                                  <div className="lead font-weight-bold">(585) 498-0838</div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="icon-contact mb-3"><i className="far fa-envelope"></i></div>
                                  <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:amunawar@u.rochester.edu">amunawar@u.rochester.edu</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              </div>

);
}

export default Home;
