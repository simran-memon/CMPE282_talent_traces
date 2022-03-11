<<<<<<< HEAD
import './App.css';
// import React  from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
import Search from './components/SearchComponent';
// import Home from './components/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
    
//     <React.Fragment>
//     <Home></Home>       
//   </React.Fragment>
//   );
// }

// export default App;

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
=======
import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import './App.css';
import UserDetails from './components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<React.Fragment>
         <Card bg={'Dark'.toLowerCase()} text={'white'}>
            <Card.Body><Card.Body>
              <h3>Talent Traces</h3>
            </Card.Body></Card.Body>
        </Card>
     <UserDetails></UserDetails>
    </React.Fragment>
  );
>>>>>>> 98a0c538b138866532134013028dafb1a3cdfcd1
}

export default App;
