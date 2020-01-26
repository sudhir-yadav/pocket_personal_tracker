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
                <Header headerTitle="sudhir" />
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
            <Footer/>

        </div>
    </div>
  );
}

export default Layout;