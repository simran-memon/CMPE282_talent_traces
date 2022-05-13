import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Button, Table } from 'reactstrap';
import axios from 'axios';
import urls from "./utils";
import '../App.css';
import Header from './Header';
import SubmitJob from './SubmitJob';
import jwt_decode from "jwt-decode";

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

Auth.configure(awsconfig);

var em ='';
class JobListings extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      userid:'',
      jobid:'',
      appliedOn:'',
      jobs:[],
      isAdmin: false
    }
  }

  componentDidMount(){

// url= window.location.hash;
// console.log("href val is", url);
// var access_token = new URLSearchParams(url.search).get('id_token');
// console.log("access token is ", access_token);
var access_token = new URLSearchParams(window.location.hash).get('access_token');
console.log("access token is ", access_token);
var decoded = jwt_decode(access_token);
console.log(decoded.username);

localStorage.setItem("user",decoded.username);
console.log("local storage user", localStorage.getItem("user"));

//     var useremail = ''
//     var email = ''


// Auth.currentAuthenticatedUser().then(function(result){
//         console.log("In app.js")
//         console.log(result.attributes.email)
//         em = result.attributes.email
//          console.log("set to em")
//          console.log(em)
//       });
   
//     if(em=='' || em==null) {

//     Auth.currentSession().then(function(data) {
//         console.log("in session code...")
//         let idToken = data.getIdToken();
//         console.dir(idToken);
//         email = idToken.payload.email;
//         console.log("print email....")

//         console.log(email);
//         em = email;
//         console.log(em);
        
 
//     });
//    }






    axios.post(urls.backendURL+'/viewJob', {
    }).then(response => response.data).then((data) => {
        this.setState({jobs:data.data});
    });
  }


  applyToJob = (e, index) => {

    this.setState({ jobid: index });

     axios.post(urls.backendURL+'/apply', { userid: "1",
     jobid: index, 
     appliedOn: new Date().toISOString().substring(0,10)})
     .then(response => response.data).then((data) => {
       console.log(data)
      console.log("After set state")
   });
}

  render(){
    
    return(<React.Fragment>

      {this.state.isAdmin===true?(
      <SubmitJob></SubmitJob>
      ):(
        <div>
    <Header></Header>

     <div>
       User info 
     </div>










          {this.state.jobs.map((job,index) => (
            
            <Card className='card-style'>
            <CardBody>
              <CardHeader dark className="bg-dark text-white">
                {job.company}
              </CardHeader>
              <CardText>
                  {job.jobTitle}
                  <br/>
                  {job.jobid}
                  <br/>
                  {job.jobDesc}
                  <br/>
                  {job.postedBy}
                  <br/>
                  {job.postedOn}
                  <br/>
                  {job.yoe}
                  <br/>
                  {job.jobLocation}
                  <br/>
                  {job.jobType}
                   <br/>
              </CardText>
              <CardFooter dark className="bg-dark text-white">
                <Button  onClick={e => this.applyToJob(e,job.jobid)}>Apply</Button>
              </CardFooter>
             </CardBody>
          </Card>  
          ))}
        </div>
      )}
    </React.Fragment>);
  }
}

export default JobListings;