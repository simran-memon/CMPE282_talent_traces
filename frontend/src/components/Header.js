import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Header() {

  return(
    <nav className="navbar navbar-dark bg-dark">
      <Link className="header" to="/profile">Profile</Link>  
      <br/>
      <Link className="header" to ="/search">Home</Link>
      <br/>
      <Authenticator>
      {({ signOut, user }) => (
     <button onClick={signOut}>Sign out</button>
      )}
      </Authenticator>

    </nav>  )
};

export default Header;