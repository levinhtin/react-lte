import React from 'react';
import {Link} from 'react-router';
import {SingleLayout} from 'components/layouts';
import {Login} from 'constants/appClass';
import SigninForm from 'components/forms/signin';


class SigninPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <SingleLayout>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <SigninForm />

            <a href="#">I forgot my password</a><br />
            <a href="register.html" className="text-center">Register a new membership</a>
          </div>
        </div>
      </SingleLayout>
    );
  }
}

export default SigninPage;