import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
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
                    {job.jobDescription}
                    <br/>
                    {job.jobid}
                    <br/>
                    {job.postedBy}
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
    {jobListings}
  </div>
</div>

    );
  }
}
export default JobListings;