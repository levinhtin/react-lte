import React from 'react';
import {Header, Footer, Aside, Main} from 'components/layouts/partials';

class MasterLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getHeightWrapper = this.getHeightWrapperHandler.bind(this);
  }

  getHeightWrapperHandler() {
    return '800px';
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    console.log(childrenWithProps);
    const styleHeight = {
      height: '800px'
    };
    const that = this;

    return (
      <div className="wrapper">
        <Header/>
        <Aside/>
        <div className="content-wrapper" style={styleHeight}>
          Hello {that.getHeightWrapper}
          {childrenWithProps}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;
