import React   from 'react';
import Header  from '../components/Header';
import Sidebar from '../components/Sidebar';

function Layout( props ) {
  return (
    <div id="wrapper"> 
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">   
            <div id="content">
                <Header/>
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Layout;