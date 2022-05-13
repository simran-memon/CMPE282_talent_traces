import axios from 'axios';
import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import AWSLogin from './AWSLogin';


class HomePage extends React.Component {

  
    render() {
      return(<React.Fragment>
            <Container fluid>
                <Row>
                <Col>
                    <h4>Home Page</h4>                    
                </Col> 
                </Row>
                <Row>
                {/* <Col><Button  onClick={()=> window.open("https://talenttracers.auth.us-west-2.amazoncognito.com/login?client_id=3n3fsevut9rfrkegficjn5mlkf&response_type=token&scope=email+openid&redirect_uri=http://localhost:3000/search/","_self")} variant="dark">Login / Sign Up</Button> 
                </Col> */}
                </Row>    
            </Container>
        </React.Fragment>)
    }
}

export default HomePage;


