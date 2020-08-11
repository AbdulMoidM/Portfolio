import React from 'react';

function About() {



  return (


<section className="masthead bg-primary text-white text-center  mt-0 pt-4 mb-0" id="about">
        {// About Section Heading-->
        }

        {// Icon Divider-->
        }
        <div className=" container d-flex align-items-center flex-column">

        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            </div>
            <div className="divider-custom-line"></div>
        </div>
        {// About Section Content-->
        }

                <p className="pre-wrap lead">

                Nice to meet you! I am a software developer with experience developing console applications in Java, C, VB.NET and Python, as well as Full Stack Web Development using Reactjs and Node.js.
                </p>
                <p className="pre-wrap lead">
                I also have a strong statistical background with programming experience using R, as well as Data Mining using relevant python libraries.
                </p>

                <p className="pre-wrap lead">

                However, a better description for myself is a learner with a desire to continue on the path of growth and learning in the areas of Software, Data Science, and Economics.
                 I am at an exploratory phase of my professional journey and that is the reason that I am flexible to a variety of roles i.e.
                  Data Science and/or Software Developer Opportunities, especially roles that benefit from an economic background.
                  </p>

                <p className="pre-wrap lead mb-0 mt-5">500 Joseph C Wilson Blvd
Rochester, NY 14627</p>

    </div>

</section>

)
}

export default About;
