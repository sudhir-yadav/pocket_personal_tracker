import React    from 'react';
import ReactDOM from 'react-dom';

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import './assets/css/App.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
