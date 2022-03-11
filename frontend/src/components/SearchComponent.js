/*
Here we are importing our react component, bootstrap requirements, and our JOBS data array from earlier
*/
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import { JOBS } from '../shared/Jobs';
import JobListings from './JobListingsComponent';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {jobs: JOBS}
  }
  render(){
    return(
        <JobListings jobs={this.state.jobs} />
    );
  }
}


export default Search;