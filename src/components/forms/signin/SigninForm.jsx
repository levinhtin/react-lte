import React from 'react';
import {connect} from 'react-redux';
import {login} from 'actions/userActions';
import {login} from 'reducers/userReducers';

class SigninForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      username: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  mapStateToProps() {
    this.props.user = React.P
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.login);
    this.props.login(this.state).then(res => {
      console.log(this.props);
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

SigninForm.propTypes = {
  login: React.PropTypes.func.isRequired,
  user: React.PropTypes.object
}
export default connect(user, {login})(SigninForm); 