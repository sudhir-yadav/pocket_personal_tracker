import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createMemoryHistory } from 'history';
import Layout from './layouts/Layout';
import routes from './routes.js';

const history = createMemoryHistory(); // Instead of createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {
            routes.map((prop, key) => {
                return(
                    <Route 
                    {...prop}                        // Pass all the properties of the element to component.
                    path={"/"+(prop.location_slug)}  // Path to redirect.
                    component={prop.component}       // Component to render.
                    key={key}                        // Unique key for loop.
                    exact
                    />
                );
            })
          }
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
