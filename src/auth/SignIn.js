import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../aws-exports";
import Home from "../components/Home";
import { Redirect } from "react-router";
Amplify.configure(awsconfig);

const Login = () => {
  const [authState, setAuthState] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
    });
  }, []);
 
  return authState === AuthState.SignedIn ? (
    <div>
     <Redirect to='/courses' />
    </div>
  ) : (
    <div>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          headerText="Create a new account"
          formFields={[
            {
              type: "username",
              label: "Username",
              placeholder: "Username",
              required: true
            },
            {
              type: "email",
              label: "Email",
              placeholder: "Email",
              required: true
            },
            {
              type: "name",
              label: "Name",
              placeholder: "Full Name",
              required: true
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Password",
              required: true
            }
          ]}
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default Login;
