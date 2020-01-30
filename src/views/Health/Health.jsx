import React from 'react';
import Footer from '../../components/Footer';

function Health() {
    return (
        <div className="row m-0">
            <div className="col-12 p-3 border-bottom-0 bg-white border-bottom">
                <h3 className="text-gray-600">
                    <i className="las mt-2 la-dumbbell"></i> 85<sup><small>.25</small></sup> <small>Kg</small>
                </h3>
            </div>
            <ul className="list-group list-group-flush col-12 p-0">
                <li className="list-group-item">Monday <div className="float-right">80 Kg</div></li>
                <li className="list-group-item">Tuesday <div className="float-right">82 Kg</div></li>
                <li className="list-group-item">Thursday <div className="float-right">83 Kg</div></li>
                <li className="list-group-item">Friday <div className="float-right">82 Kg</div></li>
                <li className="list-group-item">Saturday <div className="float-right">81 Kg</div></li>
                <li className="list-group-item">Sunday <div className="float-right">82 Kg</div></li>
            </ul>
            <div className="footer col-12 bg-white p-2">
                
            </div>

            <Footer className="bg-white p-2">
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter weight" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Save</button>
                        </div>
                    </div>
                </form>
            </Footer>
        </div>
        
    );
}

export default Health;