import React from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appClass: 'skin-blue sidebar-mini'
    };
    this.setAppClass = this.setAppClass.bind(this);
  }

  setAppClass(appClassVal) {
    this.setState({appClass: appClassVal});
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
            setAppClass: this.setAppClass
        });
    });

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;