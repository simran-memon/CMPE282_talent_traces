import React from 'react';
import { Container, Card,Form,Button, Col, Row } from 'react-bootstrap';
import './App.css';
import UserDetails from './components/UserDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<React.Fragment>
         <Card bg={'Dark'.toLowerCase()} text={'white'}>
            <Card.Body><Card.Body>
              <h3>Talent Traces</h3>
            </Card.Body></Card.Body>
        </Card>
     <UserDetails></UserDetails>
    </React.Fragment>
  );
}

export default App;
