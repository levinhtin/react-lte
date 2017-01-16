import React from 'react';
import {LoginAppClass} from 'constants/appClass';

class SingleLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
    document.body.className = LoginAppClass;
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div>
          {childrenWithProps}
      </div>
    );
  }
}

export default SingleLayout;