import React from 'react';
import {connect} from 'react-redux';
import { addFlashMessage } from 'actions/flashMessages';

export default function(authUrl, ComposedComponent, requiredRoles) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.context.router.push(authUrl);
      } else if (!this.hasPermission(requiredRoles)) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You dont have permission to access this page'
        });
        this.context.router.push(authUrl);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    hasPermission(requiredRoles) {
      let userRoles = this.props.roles;
      let inRoles = requiredRoles.filter(requiredRole => requiredRole === userRoles.find(userRole => requiredRole === userRole));

      return inRoles.length > 0;
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    roles: React.PropTypes.array.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.authentication.isAuthenticated,
      roles: JSON.parse(state.authentication.user.roles)
    };
  }

  return connect(mapStateToProps, {addFlashMessage})(Authenticate);
}