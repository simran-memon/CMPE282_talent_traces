import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import urls from "./utils"
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
        returnMsg:''
      }
    }


    submitUserInfo=(event)=>{
        event.preventDefault();

        const postData = {
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
        }

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


    render() {
      return(<React.Fragment>
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
                </Row>
            </Container>
        </React.Fragment>)
    }
}

export default UserDetails;