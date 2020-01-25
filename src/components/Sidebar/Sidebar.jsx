import React, { Component } from "react";
import { ListItem } from "./ListItem";

class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <ListItem iconName="la-heartbeat" active='sd' href="/">Health</ListItem>
                <ListItem iconName="la-chalkboard-teacher" href="/learning">Learning</ListItem>
                <ListItem iconName="la-robot" href="/automation">Automation</ListItem>
                <ListItem iconName="la-globe" href="/opensource">Opensource</ListItem>
                <ListItem iconName="la-wallet" href="/finance">Finance</ListItem>                
            </ul>
        )
    }
}

export default Sidebar;