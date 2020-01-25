import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="las la-heartbeat d-inline-block font-weight-bold h4"></i>
                        <span>Health</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/learning">
                        <i className="las la-chalkboard-teacher d-inline-block font-weight-bold h4"></i>
                        <span>Learning</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/automation">
                        <i className="las la-robot d-inline-block font-weight-bold h4"></i>
                        <span>Automation</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/opensource">
                        <i className="las la-globe d-inline-block font-weight-bold h4"></i>
                        <span>Opensource</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/finance">
                        <i className="las la-wallet d-inline-block font-weight-bold h4"></i>
                        <span>Finanace</span>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Sidebar;