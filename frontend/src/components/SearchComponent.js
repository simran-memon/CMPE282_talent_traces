/*
Here we are importing our react component, bootstrap requirements, and our JOBS data array from earlier
*/
import axios from 'axios';
import React, { Component } from 'react';
import { Button, Input, Label } from 'reactstrap';
// import { JOBS } from '../shared/Jobs';
// import { Input, Label } from 'reactstrap';
import JobListings from './JobListingsComponent';
// import axios from 'axios';
import urls from "./utils"

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs:[]
    }
  }
 

 


  render(){
    return(
      <React.Fragment>
      
 <JobListings jobs={this.state.jobs} />
      </React.Fragment>
    
       
        
    );
  }
}


export default Search;