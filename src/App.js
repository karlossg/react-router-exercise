import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
// import history from '/path/to/history';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route patch="/" component={Navigation} />
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Navigation = props => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
    {props.children}
  </div>
);

const Home = () => <h1>Hej, tu Home component</h1>;
const Contact = () => <h1>A tu Contact component</h1>;

const FourOhFour = () => <h1>404: Page not found!</h1>;

export default App;
