import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardFooter, Button } from 'reactstrap';
import axios from 'axios';
import urls from "./utils";
import { JOBS } from "../shared/Jobs.js";
class JobListings extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userid:'',
      jobid:'',
      appliedOn:''
    }
  }

  applyToJob = (e) => {
    e.preventDefault();

    const data = { userid: this.state.userid,
                  jobid: this.state.jobid, 
                  appliedOn: this.state.appliedOn}
    axios.post(urls.backendURL+'/apply', data)
    .then(response => response.data).then((data) => {
      console.log(data)
      this.setState({
        userid:localStorage.getItem('userid'),
        jobid:JOBS.jobid,
        appliedOn:new Date().toISOString().substring(0,10)
     })
     console.log("After set state")
  });
}

  render(){
    const jobListings = this.props.jobs.map(job => {
        return(
          <div key={job.id} className="col-sm-12 col-md-6 col-lg-4 my-3">
            <Card>
              <CardBody>
                <CardHeader dark className="bg-dark text-white">
                  {job.company}
                </CardHeader>
                <CardText>
                    {job.title}
                    <br/>
                    {job.jobid}
                    <br/>
                    {job.jobDescription}
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
                    {job.pay}
                </CardText>
                <CardFooter dark className="bg-dark text-white">
                  <Button onClick={this.applyToJob}>Apply</Button>
                </CardFooter>
               </CardBody>
            </Card>
          </div>
          );
      });
    return(
        <div className="container">
  <div className="row">
    {jobListings}
  </div>
</div>

    );
  }
}
export default JobListings;