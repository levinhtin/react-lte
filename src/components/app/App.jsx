import React from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  initJQueryApp() {

  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;