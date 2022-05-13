import './App.css';
// import React  from 'react';
import './shared/AddJob.css';
// import React, {useState} from 'react';
import axios from 'axios';
// import SubmitJob from './components/SubmitJob';
import AWSLogin from './components/AWSLogin';
import Header from './components/Header';
import JobListings from './components/JobListingsComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component,useState } from 'react';
import Search from './components/SearchComponent';
import HomePage from './components/Home';
import {
    BrowserRouter, Route,
    
    Routes,
    Link
  } from "react-router-dom";
import UserDetails from './components/UserDetails';
// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h3>View Job Details</h3>
//         </header>
//         <JobListingsComponent />
      
//       </div>
//     );
//   }
  
//   export default App;

class App extends Component {
  render() {
      return (
          <div className="App">
              {/* <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/"> View Job Details</NavbarBrand>
              </div>
              </Navbar>
              <Search /> */}
    <BrowserRouter>
    
      <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<AWSLogin />} />
        <Route path="search/" element={<JobListings />} />
        <Route path="profile/" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>

             
          </div>
 );
  }
}
export default App;

