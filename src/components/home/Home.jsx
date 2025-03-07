import React from 'react';
import profileImg from "../../assets/profile-img.jpg";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CV from "../../assets/Jessica_Liong_CV.pdf";
import './home.css';

const Home = () => {
     return (
          <section className='home' id='home'>
               <div className='home__wrapper'>
                    <div className='home__container container'>
                         <p className="home__subtitle text-cs">
                              Hello, <span>My Name Is</span>
                         </p>

                         <h1 className='home__title text-cs'>
                              <span>JESSICA</span> LIONG
                         </h1>

                         <p className='home__job'>
                              <span className='text-cs'>I Am A</span> <b>Web Developer</b>
                         </p>

                         <div className="home__img-wrapper">
                              <div className="home__banner">
                                   <img src={profileImg} alt="" className='home__profile'/>
                              </div>

                              <p className="home__data home__data-one">
                                   <span className="text-left text-cs">
                                        Perpetual
                                   </span>

                                   <span className="text-right text-cs">
                                        Learner
                                   </span>
                              </p>


                              <p className="home__data home__data-two">
                                   <span className="text-left text-cs">
                                        Persevering
                                   </span>
                                   
                                   <span className="text-right text-cs">
                                        Spirit
                                   </span>
                              </p>


                              <img src={shapeOne} alt="" className="shape shape__1" />
                              <img src={shapeTwo} alt="" className="shape shape__2" />
                              <img src={shapeTwo} alt="" className="shape shape__3" />
                         </div>

                         <p className='home__text'>
                              Aspiring coder with a genuine passion for web development and desire to grow professionally
                              in the tech industry.
                         </p>
                         
                         <div className="home__socials">
                              <a href="https://www.linkedin.com/in/jessica-liong/" className="home__social-link">
                                   <FaLinkedin />
                              </a>

                              <a href="https://github.com/jessicacliong" className="home__social-link">
                                   <FaGithub />
                              </a>
                         </div>
                    
                         <div className="home__btns">
                              <a download='' href={CV} className="btn text-cs">
                                   View Resume
                              </a>
                              <a href="#projects" className="hero__link text-cs">
                                   My Projects
                              </a>
                         </div>
                    </div>
               </div>
               
               <div className="section__bg-wrapper">
                    <span className="bg__title">Web Developer</span>
               </div>
          </section>
     )
}

export default Home