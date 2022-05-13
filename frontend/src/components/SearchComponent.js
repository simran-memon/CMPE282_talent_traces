/*
Here we are importing our react component, bootstrap requirements, and our JOBS data array from earlier
*/
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import JobListings from './JobListingsComponent';
import axios from 'axios'
import urls from "./utils"

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs:[]
    }
  }

  componentDidMount(){


  }


  render(){
    return(
        <JobListings jobs={this.state.jobs} />
    );
  }
}


export default Search;