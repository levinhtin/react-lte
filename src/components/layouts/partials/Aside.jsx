import React from 'react';
import userAvatar from 'assets/img/user2-160x160.jpg';

class Aside extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img alt="User Image" className="img-circle" src={userAvatar} />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" className="sidebar-form" method="get">
            <div className="input-group">
              <input className="form-control" name="q" placeholder="Search..." type="text"/>
                  <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                    </button>
                  </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-files-o"></i>
                <span>Layout Options</span>
                <span className="pull-right-container">
                  <span className="label label-primary pull-right">4</span>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
              </ul>
            </li>
            <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
            <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default Aside;