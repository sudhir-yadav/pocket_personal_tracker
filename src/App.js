import React from 'react';
import {
  Router,
  Switch,
  Route
}                 from "react-router-dom";
import { createMemoryHistory /* , createBrowserHistory */ } from 'history';
import Layout     from './layouts/Layout';
import Health     from './views/Health';
import Finance    from './views/Finance';
import Learning   from './views/Learning';
import Automation from './views/Automation';
import Opensource from './views/Opensource';

const history = createMemoryHistory(); // Instead of createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Health} />
          <Route path="/learning" exact component={Learning}/>
          <Route path="/automation" exact component={Automation}/>
          <Route path="/opensource" exact component={Opensource}/>
          <Route path="/finance" exact component={Finance}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
