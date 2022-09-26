import React ,{useEffect} from 'react'
import { Outlet, Link , useLocation} from "react-router-dom";


const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.path==="/home"? "active" :""}`} aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.path==="/about"? "active" : ""}`} to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.path==="/about"? "active" : ""}`} to="projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.path==="/about"? "active" : ""}`} to="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.path==="/about"? "active" : ""}`} to="blog">Blogs</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
<Outlet />
    </>
  )
}

export default Navbar
