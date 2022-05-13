import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import urls from "./utils"
import Header from './Header';

class UserDetails extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        userId:'',
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
        returnMsg:'',
        selectedFile: null,
        selectedFiletoDisplay: null,
        selectedFileName:'',
      }
      this.handleChange = this.handleChange.bind(this)
    }

    onFileUpload = (event) => {
  
        event.preventDefault();
        const formData = new FormData();
    
        if(this.state.selectedFile==null){
          alert("Please select a file")
          return
        }

        console.log("selected file: "+this.state.selectedFile.name)

    
        formData.append('file', this.state.selectedFile);
        formData.append('fileName', this.state.selectedFile.name)
        formData.append('userEmail', this.state.userEmail);
        
        axios.post(urls.backendURL+'/uploadResume', formData, {
           headers: {
             'Content-Type': 'multipart/form-data'
           }
        }).then(response => response.data).then((data) => {
            console.log(data)
        });
         
        console.log("after uploading")
        console.log(this.state.selectedFile.name)
      };//end of onFileUpload
      

    submitUserInfo=(event)=>{
        event.preventDefault();

        axios.post(urls.backendURL+'/addUserInfo',{
            userFirstName: this.state.userFirstName,
            userLastName: this.state.userLastName,
            userEmail: this.state.userEmail,
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
                    <h4>Profile Information</h4>
                    <Card style={{ width: '30rem' }}>
            <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control size="md" type="text" value={this.state.userFirstName} 
                  placeholder="First name" onChange={this.handlefnameChange} />
                  <Form.Control size="md" type="text" value={this.state.userLastName} 
                  placeholder="Last name" onChange={this.handlelnameChange} />
                  <Form.Control size="md" type="text" value={this.state.userEmail} 
                  placeholder="Email address" onChange={this.handleEmailChange} />
                  <Form.Control size="md" type="text" value={this.state.userContactNumber} 
                  placeholder="Contact number" onChange={this.handleContactChange} />
                  <Form.Control size="md" type="text" value={this.state.userAddress} 
                  placeholder="Address" onChange={this.handleAddrChange} />
                  <Form.Control size="md" type="text" value={this.state.userDesignation} 
                  placeholder="Designation" onChange={this.handleDesgChange} />
                  <Form.Control size="md" type="text" value={this.state.userEducation} 
                  placeholder="Education" onChange={this.handleEduChange} />
                  <Form.Control size="md" type="text" value={this.state.userExperience} 
                  placeholder="Work experience" onChange={this.handleWorkExpChange} />
                  <Form.Control size="md" type="text" value={this.state.userSkill} 
                  placeholder="Skills" onChange={this.handleSkillChange} />
                  <Form.Control size="md" type="text" value={this.state.userOther} 
                  placeholder="Others" onChange={this.handleOtherChange} />

            </Form.Group>
            <Button  onClick={this.submitUserInfo} variant="dark">Submit</Button>                     </Card>
                </Col> 
                <Col>
                <Row>
                <Card style={{ width: '40rem' }}><Card.Body> 
          <div className="col d-flex justify-content-center">
            <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select the file that you want to upload</Form.Label>
                  <Form.Control type="file" onChange={this.handleChange}/>
            </Form.Group>
            <div>&nbsp;&nbsp;</div>
            </div>
           <div className="col d-flex justify-content-center">
            <Button  onClick={this.onFileUpload} variant="dark">Save to Cloud</Button> 
            </div>
          </Card.Body></Card>
                </Row>
                </Col>  
                </Row>
            </Container>
        </React.Fragment>)
    }
}

export default UserDetails;