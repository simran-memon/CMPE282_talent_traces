import React , {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {

  return(
    <nav className="navbar navbar-dark bg-dark">
      <Link className="header" to="/profile">Profile</Link>  
      <br/>
      <Link className="header" to ="/search">Home</Link>
      <br/>
      <Button onClick={()=>window.open("https://talenttracers.auth.us-west-2.amazoncognito.com/logout?client_id=3n3fsevut9rfrkegficjn5mlkf&response_type=token&logout_uri=http://localhost:3000/&response_type=token/logout", "_self")} >Logout</Button>
    </nav>
  )
};

export default Header;