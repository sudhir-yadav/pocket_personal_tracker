import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top border-bottom">
                <h4 className="h4 text-gray-800">
                    <i className="las mt-2 la-robot"></i> SUDHIR.DEV
                </h4>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Sudhir Yadav</span>
                            <img alt="Sudhir" className="img-profile rounded-circle" src="https://yt3.ggpht.com/a-/AAuE7mCoY52t5X-CqgnAA5BvHDNF-pDi5qqlZWyyjcw1YA=s88-c-k-c0xffffffff-no-rj-mo" />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;