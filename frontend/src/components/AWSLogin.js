import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Home from './Home';
import { Auth } from 'aws-amplify';
import JobListings from './JobListingsComponent';

Auth.configure(awsconfig);

const AWSLogin = () => (
  <div>
    <JobListings></JobListings>
  </div>
);

export default withAuthenticator(AWSLogin);
