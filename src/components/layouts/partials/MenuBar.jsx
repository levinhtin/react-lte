import React from 'react';
import {Link} from 'react-router';
import {NavLink} from 'components/elements';

class MenuBar extends React.Component {
  render() {
    return (
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
        <NavLink to="users">
            <i className="glyphicon glyphicon-user"></i> <span>Users</span>
        </NavLink>
        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    );
  }
}

export default MenuBar;