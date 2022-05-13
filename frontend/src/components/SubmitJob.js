import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Card, Form } from 'react-bootstrap';
import urls from "./utils"
import { Authenticator } from '@aws-amplify/ui-react';

const SubmitJob = () => {

    const [jobTitle, setJobTitle] = useState("")
    const [jobDesc, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobSalary, setJobSalary] = useState(null)
    const [yoe, setJobExp] = useState(null)
    const [company, setCompName] = useState("")
    const [jobType, setJobType] = useState("")
    const [postedBy, setPostedBy] = useState("")
    const [postedOn, setPostedOn] = useState("")


    const postJob = (e) => {
      e.preventDefault();
        const data = { jobTitle: jobTitle, jobDesc: jobDesc, jobLocation: jobLocation,
                        jobSalary: jobSalary, yoe: yoe, company: company,
                        jobType: jobType, postedBy: postedBy, postedOn:  postedOn}
        console.log(data)

        axios.post(urls.backendURL+'/addJob', data)
        .then(response => {
          console.log(response)
        })

        alert("Job Added")
    }

    return(
      <div className="submitJobContainer">
        
          <Card className= "addjob" style={{ width: '35rem', backgroundColor:'white', borderRadius:"10px"}}>
              <Form.Group controlId="formFile" className="mb-3">
              <Card.Header style={{backgroundColor:"#61b0fb"}}>
              <h3 className="heading">Add New Job</h3>
              </Card.Header><br/>
                  <Form.Control size="md" type="text" name="jobTitle" placeholder="Job Title" 
                  onChange={e => setJobTitle(e.target.value)} />
                  <br/>
                  <Form.Control size="md" type="text" name="jobDesc" placeholder="Job Description"
                    onChange={e => setJobDescription(e.target.value)}/>
                    <br/>
                  <Form.Control size="md" type="text" name="yoe" placeholder="Year of Experience" 
                  onChange={e => setJobExp(e.target.value)} />
                  <br/>
                  <Form.Control size="md" type="text" name="company" placeholder="Company Name" 
                  onChange={e => setCompName(e.target.value)} />
                  <br/>
                  <Form.Control size="md" type="text"  name="jobLocation" placeholder="Job Location"
                    onChange={e => setJobLocation(e.target.value)} />
                    <br/>
                  <Form.Control size="md" type="text" name="jobType" placeholder="Job Type: InternShip/ Full-time/ Part-time" 
                  onChange={e => setJobType(e.target.value)}/>
                  <br/>
                  <Form.Control size="md" type="text" name="jobSalary" placeholder="Job Salary"
                    onChange={e => setJobSalary(e.target.value)} />
                    <br/>
                  <Form.Control size="md" type="text" name="postedBy" placeholder="Posted By"
                  onChange={e => setPostedBy(e.target.value)}  />
                  <br/>
                  <Form.Control size="md" type="text" name="postedOn" placeholder="Posted On" 
                  onChange={e => setPostedOn(e.target.value)}/>
                  <Card.Footer >
                  <Button  onClick={postJob} variant="dark">Add Job</Button>
                </Card.Footer>
            </Form.Group>
            
          </Card>
       
    <Authenticator>
      {({ signOut, user }) => (
     <button onClick={signOut}>Sign out</button>
      )}
    </Authenticator>
        </div>    )
}

export default SubmitJob
