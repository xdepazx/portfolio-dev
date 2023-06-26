import About from '../components/About'
import Footer from '../components/Footer'
import Tags from '../components/Tags'
import dot from '../assets/UI-DOT.png'
import pls from '../assets/UI-PLS.png'
import cre from '../assets/UI-cre.png'
import movies from '../assets/F-movies.png'
import tareas from '../assets/F-tareas.png'
import port from '../assets/UI-frida.png'
import profile from '../assets/profile.png'
import Typewriters from '../typewriter/Typewriters'
import { FaFacebook, FaGithub, FaBehance, FaLaptop, FaLinkedin } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
        <div >
            <div className="hero">
                <div className=" mb-4">
                    <div className="row my-3 p-4 ">
                        <div className="col-md-5 vertical">
                            <div className="">
                            
                            <Typewriters/>
                            </div>
                        </div>
                        
                        <div className="col-md-7 vertical">
                            <div className="mx-auto">
                                <h2 className='display-6'>
                                web designer / software developer
                                </h2>
                                {/* <div className="text-center icons mt-4">
                                    <FaGithub/>
                                    <FaLinkedin/>
                                    <FaBehance/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-7">
                            <Tags/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="about">
                    <div className="container p-4 text-center ">
                        <About/>
                    </div>
                </div>
            <div id='education' className='edu'>
                <h3>Education</h3>
                <div className="container p-4 md-5 ">
                    <div className="row">
                        <div className="row text-center">
                            
                        </div>
                    
                        <div className="col-sm-1 col-md-3 mx-auto g-4">
                            <div className="exp-boxes shadow-sm p-3 h-100">
                                
                                <div className="text ">
                                    <h5 className=" fw-bold title">BA in Graphic Design</h5>
                                    
                                </div>
                            </div>
                        </div>
                
                
                    <div className="col-sm-1 col-md-3 mx-auto g-4">
                        <div className="exp-boxes shadow-sm p-3  h-100">
                            
                            <div className="  text">
                                <h5 className=" fw-bold">Software Development </h5>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <div className="row mt-4  ">
                        <div className="row text-center">
                            <h3>Work experience</h3>
                        </div>
                    <div className="col-sm-1  col-md-3 mx-auto g-4">
                        <div className="exp-boxes shadow-sm p-3  h-100">
                           
                            <div className="text">
                                <h5 className=" fw-bold">Graphic Designer Intern</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-3 mx-auto g-4">
                        <div className="exp-boxes shadow-sm p-3 h-100">
                            
                            <div className="text">
                                <h5 className=" fw-bold ">Web Designer Jr.</h5>
                                
                            </div>
                        </div>
                        </div>
                    </div> */}
                
                </div>
            </div>
            <div id='ui'>
                <h3>UI Design /Figma </h3>
                <div className="container p-4 md-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <div className="hovereffect">
                                     <img src={dot} className="card-img-top img-fluid" alt="..." />
                                    <div className="overlay">
                                        <h2></h2>
                                        <div className="container-icons">
                                            <p>
                                                
                                                <a href="https://www.behance.net/gallery/170973827/Web-Design-DOT-trucks" target="_blank" rel="noopener noreferrer">
                                                <FaBehance/>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bg-light text-center">
                                    <h5 className="card-title ">DOT trucking permits</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                            <div className="hovereffect">
                                <img src={pls} className="card-img-top img-fluid" alt="..." />
                                <div className="overlay">
                                    <h2></h2>
                                    <div className="container-icons">
                                            <p>
                                                
                                                <a href="https://www.behance.net/gallery/171423705/Designs-for-education-platform" target="_blank" rel="noopener noreferrer">
                                                <FaBehance/>
                                                </a>
                                            </p>
                                    </div>
                                </div>
                                </div>
                                <div className="card-body bg-light text-center">
                                    <h5 className="card-title ">Prepa en línea-SEP</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <div className="hovereffect">
                               <img src={cre} className="card-img-top img-fluid" alt="..." />
                               <div className="overlay">
                                <h2></h2>
                                    <div className="container-icons">
                                                <p>
                                                    
                                                    <a href="https://www.behance.net/gallery/171816145/Credenda-inc-Web-Design?" target="_blank" rel="noopener noreferrer">
                                                    <FaBehance/>
                                                    </a>
                                                </p>
                                    </div>
                                </div>
                                </div>
                                    <div className="card-body bg-light text-center">
                                        <h5 className="card-title ">Credenda Inc.</h5>
                                    </div>
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id='front'>
                <h3>Frontend / React JS</h3>
                <div className="container p-4 md-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                            <div className="hovereffect">
                               <img src={movies} className="card-img-top img-fluid" alt="..." />
                               <div className="overlay">
                                <h2></h2>
                                    <div className="container-icons">
                                                <p>
                                                    <a href="https://github.com/xdepazx/movies-frontend" target="_blank" rel="noopener noreferrer">
                                                    <FaGithub/>
                                                
                                                    </a>
                                                    <a href="https://taupe-jelly-73f744.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <FaLaptop/>
                                                    </a>
                                                </p>
                                    </div>
                                </div>
                                </div>
                                <div className="card-body bg-light text-center">
                                    <h5 className="card-title ">Oura Movies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                            <div className="hovereffect">
                               <img src={tareas} className="card-img-top img-fluid" alt="..." />
                               <div className="overlay">
                                <h2></h2>
                                    <div className="container-icons">
                                                <p>
                                                    <a href="https://github.com/xdepazx/tareas-fullstack" target="_blank" rel="noopener noreferrer">
                                                    <FaGithub/>
                                                
                                                    </a>
                                                    <a href="https://fascinating-jalebi-25e39a.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <FaLaptop/>
                                                    </a>
                                                </p>
                                    </div>
                                </div>
                                </div>
                                 <div className="card-body bg-light text-center">
                                    <h5 className="card-title ">Daily Planner App</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                            <div className="hovereffect">
                               <img src={port} className="card-img-top img-fluid" alt="..." />
                               <div className="overlay">
                                <h2></h2>
                                    <div className="container-icons">
                                                <p>
                                                    <a href="https://github.com/xdepazx/portfolio-dev" target="_blank" rel="noopener noreferrer">
                                                    <FaGithub/>
                                                
                                                    </a>
                                                    <a href="#" >
                                                    <FaLaptop/>
                                                    </a>
                                                </p>
                                    </div>
                                </div>
                                </div>
                                 <div className="card-body bg-light text-center">
                                    <h5 className="card-title ">Personal Portfolio</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home