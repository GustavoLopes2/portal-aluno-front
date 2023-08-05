import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import App from 'App';
import ProofOfEnrollment from './ProofOfEnrollment/ProofOfEnrollment';
import LoginScreen from './Signin/LoginScreen';
import RegisterScreen from './SignUp/RegisterScreen';

const Root = () => {
    return (
      <Router>
        <Switch>
            <Route path="/ComprovanteDeMatricula" component={ProofOfEnrollment} />
            <Route path="/Home" component={App} />
            <Route path="/Cadastrar" component={RegisterScreen} />
            <Route path="/" component={LoginScreen} />
        </Switch>
      </Router>
    );
  };
  

export default Root;