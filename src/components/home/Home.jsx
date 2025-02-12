import React from 'react';
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__container container'>
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>

            <h1 className='home__title text-cs'>
                <span>JESSICA</span> LIONG
            </h1>

            <p className='home__job'>
                <span className='text-cs'>I Am a</span> <b>Junior Web Developer</b>
            </p>

            <p className='home__text'>
               Enthusiastic professional transitioning careers to web development. 
               Posses can-do attitude to problem-solving and learning, with a solid foundations in HTML, CSS, and JavaScript. 
               Eager to leverage my skills to contribute to dynamic web development projects.
            </p>
            
            <div className="home__socials">
                <a href="" className="home__social-link">
                    <FaLinkedin />
                </a>

                <a href="" className="home__social-link">
                    <FaGithubAlt />
                </a>

                <a href="" className="home__social-link">
                    <FaTwitter />
                </a>
            </div>

            <div className="home__btns">
                <a href="" className="btn">Download CV</a>
                <a href="" className="hero__link">My Skills</a>
            </div>
        </div>
    </section>
  )
}

export default Home