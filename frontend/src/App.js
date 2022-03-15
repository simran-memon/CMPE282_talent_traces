import './App.css';
// import React  from 'react';
import './shared/AddJob.css';
import React, {useState} from 'react';
import axios from 'axios';
import SubmitJob from './components/SubmitJob';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import React, { Component } from 'react';
// import Search from './components/SearchComponent';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h3>Add New Job Details</h3>
        </header>
        <SubmitJob />
      
      </div>
    );
  }
  
  export default App;

// class App extends Component {
//   render() {
//       return (
//           <div className="App">
//               <Navbar dark color="primary">
//               <div className="container">
//                   <NavbarBrand href="/"> View Job Details </NavbarBrand>
//               </div>
//               </Navbar>
//               <Search />
//           </div>
//  );
//   }
// }
// export default App;

