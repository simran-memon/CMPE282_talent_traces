import './App.css';
// import React  from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Search from './components/SearchComponent';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/"> View Job Details </NavbarBrand>
              </div>
              </Navbar>
              <Search />
          </div>
 );
  }
}
export default App;

