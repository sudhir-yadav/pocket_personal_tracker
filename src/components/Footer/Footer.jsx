import React, { Component } from "react";

class Footer extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <footer className={"footer "+ (this.props.className)}>
                    {/* <span className="small">Copyright &copy; sudhir.dev 2020</span> */}
                    {this.props.children}
            </footer>
        )
    }
}

export default Footer;