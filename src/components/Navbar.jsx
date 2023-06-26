import CV from '../assets/FRIDA_DE_PAZ_DEV_UI.pdf'

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="me-auto"></ul>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#about">About me
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#ui">UI Design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#front">Frontend</a>
        </li>
        <li className="btn-cv nav-item ms-2">
          <a className="nav-link text-center" href={CV} target="_blank" rel="noreferrer">
            CV
            </a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar