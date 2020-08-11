import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'
import useScrollPosition from '@react-hook/window-scroll'

function Navbar(props) {
 const scrollY = useScrollPosition(60 /*fps*/)
 let navStyle={}
 scrollY<1? navStyle={}: navStyle={height:'10%'}

  return (
    <div>

    <div className={scrollY<1? "navbar navbar-expand-lg  fixed-top": "navbar navbar-expand-lg bg-secondary fixed-top pt-5 pb-4" } id="mainNav" style={navStyle}>

        <div className="container">
            <p style={{fontSize:'150%', color:'white'}}>
            Welcome To My Portfolio!
           </p>
            <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                    <Link
                    className="m-2"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{color:'white'}}

                    ><p className='active'>PORTFOLIO</p></Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                    <Link
                    className="m-2"

                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{color:'white'}}
                    >
                    <p ><p className='active'>ABOUT</p></p>
                    </Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                    <Link
                    className="m-2"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{color:'white'}}

                    ><p className='active'> CONTACT</p></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
