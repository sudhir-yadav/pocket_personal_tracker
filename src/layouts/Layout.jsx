import React  from 'react';
import Header  from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Layout( props ) {
  return (
    <div id="wrapper"> 

        <Sidebar/>

        <div id="content-wrapper" className="d-flex flex-column">  

            <div id="content">
                <Header/>
                <div className="container-fluid p-0">
                    {props.children}
                </div>
            </div>
            <Footer/>

        </div>
    </div>
  );
}

export default Layout;