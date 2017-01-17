import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from 'actions/userActions';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(res => {
      console.log(res);
      this.context.router.push('/');
    }).catch(err => {
      console.log(err);
    });
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group has-feedback">
          <input type="text" name="username" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onChange} />
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input type="password"  name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
          </div>
          <div className="col-xs-4">
            <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authentication.user,
    isAuthenticated: state.authentication.isAuthenticated
  };
};

const mapDispatchToProps = (dispatcher) => {
  return {
    login: bindActionCreators(userActions.login, dispatcher)
  };
};

SigninForm.propTypes = {
  login: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
  isAuthenticated: React.PropTypes.bool
};

SigninForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm); 