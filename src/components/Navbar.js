import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {

  const location = useLocation();

  const isactive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.modee} bg-${props.modee}`}>
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="/">{props.title}</a> */}
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${isactive("/")}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isactive("/about")}`} to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.modee === 'light'?'black':'white'}`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.tooglemode} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
    // title: PropTypes.string
    // aboutText: PropTypes.string
}


Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About Us"
}