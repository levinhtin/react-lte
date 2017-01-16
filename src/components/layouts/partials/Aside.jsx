import React from 'react';
import userAvatar from 'assets/img/user2-160x160.jpg';
import MenuBar from './MenuBar.jsx';
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
          <MenuBar/>
        </section>
      </aside>
    );
  }
}

export default Aside;