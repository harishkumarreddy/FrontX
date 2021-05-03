import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export class Leftside extends Component {
    render() {
        return (
            <div className="animate__slideInLeft">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <NavLink activeClassName="active" className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                        <div className="sidebar-brand-icon" style={{
                            backgroundImage:"url(./logo192.png)",
                            backgroundColor: "#ffffffd4"
                        }}>
                        </div>
                        <div className="sidebar-brand-text mx-3">Harishkumar</div>
                    </NavLink >

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item">
                        <NavLink activeClassName="active" exact className="nav-link" to="/">
                            <i className="fas fa-fw fa-user"></i>
                            <span>About</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/certification">
                            <i className="fas fa-fw fa-certificate"></i>
                            <span>Certification</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/portfolio">
                            <i className="fas fa-fw fa-cubes"></i>
                            <span>Portfolio</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/contact">
                            <i className="fas fa-fw fa-phone"></i>
                            <span>Contact</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/resume">
                            <i className="fas fa-fw fa-download"></i>
                            <span>Resume</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" exact className="nav-link" to="/blog">
                            <i className="fas fa-fw fa-globe"></i>
                            <span>Blog</span></NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/blog/post1">
                            <i className="fas fa-fw fa-globe"></i>
                            <span>Blogpost</span></NavLink >
                    </li>
                    <hr className="sidebar-divider" />
                </ul>
            </div>
        )
    }
}

export default Leftside