import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class ListItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={this.props.href}>
                    <i className={"las " +( this.props.iconName ) +" d-inline-block font-weight-bold h4"}></i>
                    <span>{ this.props.children }</span>
                </Link>
            </li>
        )
    }
}

export default ListItem
