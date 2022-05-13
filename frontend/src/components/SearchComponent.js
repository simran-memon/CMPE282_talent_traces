/*
Here we are importing our react component, bootstrap requirements, and our JOBS data array from earlier
*/
import axios from 'axios';
import React, { Component } from 'react';
import { Button, Input, Label } from 'reactstrap';
import { JOBS } from '../shared/Jobs';
import JobListings from './JobListingsComponent';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {jobs: JOBS}
  }
 

//   GetuserInfo=()=>{
//     var url = window.location.hash;
//     console.log("url is",url);

//  var access_token = url.match(/\#(?:id_token)\=([\S\s]*?)\&/)[1];
// console.log("access token is ",access_token);


//     // axios.get("https://talenttracers.auth.us-west-2.amazoncognito.com/oauth2/userinfo")
//     // .then(response => {
//     //   console.log(response)
//     // })
// }

  render(){
    return(
      <React.Fragment>
        {/* <Button onClick={this.GetuserInfo}>User Info</Button> */}
 <JobListings jobs={this.state.jobs} />
      </React.Fragment>
    
       
        
    );
  }
}


export default Search;