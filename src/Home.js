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
                          <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                          <div className="divider-custom-line"></div>
                      </div>
                      {// Contact Section Content-->
                      }
                      <div className="row justify-content-center">
                          <div className="col-lg-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="icon-contact mb-3">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                      <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                  </div>
                                  <div className="text-muted">Phone</div>
                                  <div className="lead font-weight-bold">(585) 498-0838</div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="icon-contact mb-3">
                                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                      </svg>
                                  </div>
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
