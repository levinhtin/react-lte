import React from 'react';
import {Header, Footer, Aside, Main} from 'components/layouts/partials';
import {DashboardAppClass} from 'constants/appClass';

class MasterLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
    document.body.className = DashboardAppClass;
  }

  getHeightWrapperHandler() {
    return { height: window.innerHeight + 'px' };
  }

  changeAppClass(className) {
    console.log('Class', className);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));

    return (
      <div className="wrapper">
        <Header/>
        <Aside/>
        <div className="content-wrapper" style={this.getHeightWrapperHandler()}>
          {childrenWithProps}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;
