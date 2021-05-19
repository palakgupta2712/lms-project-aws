import React from "react";
import Navbar from "./components/Navbar";
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div>
        <Navbar user={user}/>
      </div>
    ) : (
      <div>
      <AmplifyAuthenticator>
      <AmplifySignUp
        slot='sign-up'
        headerText='Create a new account'
        formFields={[
          {
            type: 'username',
            label: 'Username',
            placeholder: 'Username',
            required: true,
          },
          {
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            required: true,
          },
          {
            type: 'name',
            label: 'Name',
            placeholder: 'Full Name',
            required: true,
          },
          {
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            required: true,
          },
        ]}
      />
    </AmplifyAuthenticator>
  </div>
  );
}

export default App;
