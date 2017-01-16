import React from 'react';

class TextFormGroup extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  
  render() {
    return(
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
    );
  }
}