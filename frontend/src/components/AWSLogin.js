import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Home from './Home';
import { Auth } from 'aws-amplify';
import JobListings from './JobListingsComponent';
import UserDetails from './UserDetails';
import SubmitJob from './SubmitJob';

var em=""
var useremail = ''
var email = ''

Auth.currentAuthenticatedUser().then(function(result){
  console.log("In aws login")
  em = result.attributes.email
  
  localStorage.setItem("email", em);

});

if(em=='' || em==null) {

Auth.currentSession().then(function(data) {
  console.log("In aws login")
      let idToken = data.getIdToken();
      email = idToken.payload.email;
      em = email;
  
    });
}

Auth.configure(awsconfig);

const AWSLogin = () => (
  <div>
    {localStorage.getItem("email")?(
      <SubmitJob></SubmitJob>
    ):(
      <UserDetails></UserDetails>
    )}
 
  </div>
);

export default withAuthenticator(AWSLogin);