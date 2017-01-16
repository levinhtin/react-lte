import React from 'react';
import {MasterLayout} from 'components/layouts';
import {ContentHeader, ResponsiveTable} from 'components/elements';

class UsersPage extends React.Component {

  render () {
    return (
      <MasterLayout>
        <ContentHeader/>
        <section className="content">
          <div className="col-xs-12">
            <ResponsiveTable/>
          </div>
        </section>
      </MasterLayout>
    );
  }
}

export default UsersPage;