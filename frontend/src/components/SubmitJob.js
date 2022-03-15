import React, {useState} from 'react';
import axios from 'axios';

const SubmitJob = () => {

    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [jobLocation, setJobLocation] = useState("")
    const [jobSalary, setJobSalary] = useState(null)
    const [jobExperience, setJobExp] = useState(null)
    const [jobCompanyName, setCompName] = useState("")
    const [jobType, setJobType] = useState("")


    const postJob = (e) => {
        const data = { title: jobTitle, description: jobDescription, location: jobLocation,
                        salary: jobSalary, experience: jobExperience, company: jobCompanyName,
                        type: jobType}
        axios.post('/api/jobs/', data)
        .then(response => {
          console.log(response)
        })
    }

    return(
        <div className="submitJobContainer">
            <h3>Submit a Job</h3>
            <form className="formContainer" onSubmit={postJob}>
                <input type="text" name="title" placeholder="Job Title" 
                  onChange={e => setJobTitle(e.target.value)} />

                <input type="text" name="description" placeholder="Job Description"
                    onChange={e => setJobDescription(e.target.value)} />

                <input type="number" name="experience" placeholder="Year of Experience" 
                  onChange={e => setJobExp(e.target.value)} />

                <input type="text" name="company" placeholder="Company Name" 
                  onChange={e => setCompName(e.target.value)} />

                <input type="text" name="location" placeholder="Job Location"
                    onChange={e => setJobLocation(e.target.value)} />

                <input type="text" name="type" placeholder="Job Type: InternShip/ Full-time/ Part-time" 
                  onChange={e => setJobType(e.target.value)} />

                <input type="number" name="salary" placeholder="Job Salary"
                    onChange={e => setJobSalary(e.target.value)} />

                <button className="submitButton" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default SubmitJob
