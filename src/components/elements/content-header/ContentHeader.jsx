import React from 'react';

class ContentHeader extends React.Component {
  render() {
    return (
      <section className="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
    );
  }
}

export default ContentHeader;