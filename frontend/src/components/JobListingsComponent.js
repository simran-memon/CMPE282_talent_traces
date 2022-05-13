import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Button, Table } from 'reactstrap';
import axios from 'axios';
import urls from "./utils";
import '../App.css';
import Header from './Header';
import SubmitJob from './SubmitJob';
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
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