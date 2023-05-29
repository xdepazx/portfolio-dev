import education from '../assets/gorro-de-graduacion.png'
import work from '../assets/portafolio.png'
import dot from '../assets/UI-DOT.png'
import pls from '../assets/UI-PLS.png'
import cre from '../assets/UI-cre.png'
import movies from '../assets/F-movies.png'
import Typewriters from '../typewriter/Typewriters'

const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="hero">
                <div className="p-4 md-5 mb-4 rounded ">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <Typewriters/>
                            
                            <h2 className="my-3">
                            I'm a web designer and frontend developer
                            </h2>
                        </div>
                        {/* <div className="col-md-6 ">
                            <img src={flower} alt="" className='img-fluid'/>
                        </div> */}
                    </div>
                </div>
            </div>
            <div id='experience'>
                <h2>Experience</h2>
                <div className="container p-4 md-5 ">
                <div className="row row-cols-md-5 g-5 ">
                    
                    <div className="col-sm-1 mx-auto">
                        <div className="card  h-100">
                            <img src="" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body bg-secondary text-center">
                                <h5 className="card-title ">BA in Graphic Design</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 mx-auto">
                        <div className="card h-100">
                            <img src="" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body bg-secondary text-center">
                                <h5 className="card-title ">Frontend Developer at DEV.F</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 mx-auto">
                        <div className="card h-100">
                            <img src="" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body bg-secondary text-center">
                                <h5 className="card-title ">Graphic Designer Intern</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 mx-auto">
                        <div className="card h-100">
                            <img src="" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body bg-secondary text-center">
                                <h5 className="card-title ">Web Designer Jr.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div id='ui'>
                <h2>UI Design</h2>
                <div className="container p-4 md-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <img src={dot} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">DOT trucking permits</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <img src={pls} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">Prepa en línea-SEP</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <img src={cre} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">Credenda Inc.</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id='front'>
                <h2>Frontend</h2>
                <div className="container p-4 md-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                               <a href="https://taupe-jelly-73f744.netlify.app/" target="_blank" rel="noopener noreferrer"> <img src={movies} className="card-img-top" alt="..." /></a>
                                
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">Oura Movies</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <img src={dot} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">BA Graphic Design</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1 mx-auto">
                            <div className="card  h-100">
                                <img src={dot} className="card-img-top" alt="..." />
                                <div className="card-body bg-secondary text-center">
                                    <h5 className="card-title ">BA Graphic Design</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home