import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import urls from "./utils"
import Header from './Header';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '../shared/AddJob.css';


Auth.configure(awsconfig);

var em =''
class UserDetails extends React.Component {

    constructor(props){
      super(props)

      this.state = {
        userid:'',
        userFirstName:'',
        userLastName:'',
        userEmail:'',
        userContactNumber:'',
        userDesignation:'',
        userAddress:'',
        userEducation:'',
        userExperience:'',
        userSkill:'',
        userOther:'',
        resumeLink:'',
        returnMsg:'',
        selectedFile: null,
        selectedFiletoDisplay: null,
        selectedFileName:'',
      }
      this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(props){

        var useremail = ''
        var email = ''
    
    
    Auth.currentAuthenticatedUser().then(function(result){
            console.log("In Userdetails")
            console.log(result.attributes.email)
            em = result.attributes.email
             console.log("set to em")
             console.log(em)
             console.log("em outside "+em)
             localStorage.setItem("email", em);
      
          });
    
        if(em=='' || em==null) {
    
        Auth.currentSession().then(function(data) {
            console.log("in session code...")
            let idToken = data.getIdToken();
            console.dir(idToken);
            email = idToken.payload.email;
            console.log("print email....")

            console.log(email);
            em = email;
            console.log("em "+ em);

            this.setState({userEmail:email})
        });
       }



        axios.post(urls.backendURL+'/fetchUser',{
            userEmail: localStorage.getItem("email"),
        })
        .then(response => response.data).then((data) => {

            this.setState({
                userId:data.result[0].userid,
                userFirstName:data.result[0].userFirstName,
                userLastName:data.result[0].userLastName,
                userEmail:data.result[0].userEmail,
                userContactNumber:data.result[0].userContactNumber,
                userDesignation:data.result[0].userDesignation,
                userAddress:data.result[0].userAddress,
                userEducation:data.result[0].userEducation,
                userExperience:data.result[0].userExperience,
                userSkill:data.result[0].userSkill,
                userOther:data.result[0].userOther,
                resumeLink:data.result[0].resumeLink,
              })
        }); 
    }

    onFileUpload = (event) => {
        
        const formData = new FormData();
    
        if(this.state.selectedFile==null){
          alert("Please select a file")
          return
        }

        console.log("selected file: "+this.state.selectedFile.name)

        formData.append('file', this.state.selectedFile);
        formData.append('fileName', this.state.selectedFile.name)
       // formData.append('userEmail', localStorage.getItem("email"));
        
        console.log("formData email"+JSON.stringify(formData))

        axios.post(urls.backendURL+'/uploadResume', formData, {
           headers: {
             'Content-Type': 'multipart/form-data'
           }
        }).then(response => response.data).then((data) => {
            console.log(data)
        });

        alert("Resume saved to cloud storage")
         
        console.log("after uploading")
        console.log(this.state.selectedFile.name)
      };

    submitUserInfo=(event)=>{
        event.preventDefault();

        axios.post(urls.backendURL+'/addUserInfo',{
            userFirstName: this.state.userFirstName,
            userLastName: this.state.userLastName,
            userEmail: em,
            userContactNumber: this.state.userContactNumber,
            userAddress: this.state.userAddress,
            userDesignation: this.state.userDesignation,
            userEducation: this.state.userEducation,
            userExperience: this.state.userExperience,
            userSkill: this.state.userSkill,
            userOther: this.state.userOther,
        })
        .then(response => response.data).then((data) => {
           console.log(data.response)
           this.setState({
             returnMsg:''
          })
        });

        alert("Profile saved")
    }

    handlefnameChange = (e) => {
        this.setState({ userFirstName: e.target.value });
    }
    handlelnameChange = (e) => {
        this.setState({ userLastName: e.target.value });
    }
    handleEmailChange = (e) => {
        this.setState({ userEmail: e.target.value });
    }
    handleContactChange = (e) => {
        this.setState({ userContactNumber: e.target.value });
    }
    handleAddrChange = (e) => {
        this.setState({ userAddress: e.target.value });
    }
    handleDesgChange = (e) => {
        this.setState({ userDesignation: e.target.value });
    }
    handleEduChange = (e) => {
        this.setState({ userEducation: e.target.value });
    }
    handleWorkExpChange = (e) => {
        this.setState({ userExperience: e.target.value });
    }
    handleSkillChange = (e) => {
        this.setState({ userSkill: e.target.value });
    }
    handleOtherChange = (e) => {
        this.setState({ userOther: e.target.value });
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({
            selectedFiletoDisplay: URL.createObjectURL(event.target.files[0]),
            selectedFile: event.target.files[0]
        })
      };

    render() {
      return(<React.Fragment>
        <Header></Header>
          <Container fluid>
              <Row>
              <Col>
              <div className="userContainer"> 
               <Card className= "user" style={{ width: '35rem' }}>
               <Card.Header style={{backgroundColor:"#61b0fb"}}>
                  <h4 className="heading1">Profile Information {em}</h4>
               </Card.Header>
               <br/>
               <Form.Group controlId="formFile" className="mb-3">
                <Form.Control size="md" type="text" value={this.state.userFirstName} 
                placeholder="First name" onChange={this.handlefnameChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userLastName} 
                placeholder="Last name" onChange={this.handlelnameChange} />
                <br/>
               {/* <Form.Control size="md" type="text" value={this.state.userEmail} 
                placeholder="Email address" onChange={this.handleEmailChange} />
                <br/>*/}
                <Form.Control size="md" type="text" value={this.state.userContactNumber} 
                placeholder="Contact number" onChange={this.handleContactChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userAddress} 
                placeholder="Address" onChange={this.handleAddrChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userDesignation} 
                placeholder="Designation" onChange={this.handleDesgChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userEducation} 
                placeholder="Education" onChange={this.handleEduChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userExperience} 
                placeholder="Work experience" onChange={this.handleWorkExpChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userSkill} 
                placeholder="Skills" onChange={this.handleSkillChange} />
                <br/>
                <Form.Control size="md" type="text" value={this.state.userOther} 
                placeholder="Others" onChange={this.handleOtherChange} />
          </Form.Group>
          <Card.Footer>
          <Button  className="submitButton" style={{backgroundColor:"#61b0fb", border:"#0c88ed", color:"white"}} onClick={this.submitUserInfo}>Submit</Button>     
          </Card.Footer>                
          </Card>
          </div>
          </Col> 
          <Col>
          <Row>
              
          <Card style={{ width: '35rem', top:"15em", left:"20px"}}>
          <Card.Body> 
        <div className="col d-flex justify-content-center">
          <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{color:"#61b0fb"}}>Please upload your latest Resume!!</Form.Label>
                <br/><br/>
                <Form.Control type="file" onChange={this.handleChange}/>
          </Form.Group>
          <div>&nbsp;&nbsp;</div>
          </div>
         <div className="col d-flex justify-content-center">
          <Button  className="submitButton" style={{backgroundColor:"#61b0fb", border:"#0c88ed", color:"white", width:"10em"}} onClick={this.onFileUpload}>Save to Cloud</Button> 
          </div>
        </Card.Body>
        </Card>
              </Row>
              </Col>  
              </Row>
          </Container>
      </React.Fragment>
)
    }
}

export default UserDetails;