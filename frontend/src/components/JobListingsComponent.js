import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { Button } from 'react-bootstrap';   //limeka
class JobListings extends Component {
  constructor(props){
    super(props);
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
               </CardBody>
            </Card>
          </div>
          );
      });
    return(
        <div className="container">
  <div className="row">
   {/* limeka */}
  <Button onClick={()=>window.open("https://talenttracers.auth.us-west-2.amazoncognito.com/logout?client_id=3n3fsevut9rfrkegficjn5mlkf&response_type=token&logout_uri=http://localhost:3000/&response_type=token/logout", "_self")} >Logout</Button>
    {jobListings}
  </div>
</div>

    );
  }
}
export default JobListings;