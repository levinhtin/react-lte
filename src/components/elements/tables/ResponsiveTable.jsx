import React from 'react';

class ResponsiveTable extends React.Component {
  render() {
    return(
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Responsive Hover Table</h3>

          <div className="box-tools">
            <div className="input-group input-group-sm" style={{width: '150px'}}>
              <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="box-body table-responsive no-padding">
          <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Status</th>
              <th>Reason</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>183</td>
                <td>John Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-success">Approved</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>219</td>
                <td>Alexander Pierce</td>
                <td>11-7-2014</td>
                <td><span className="label label-warning">Pending</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>657</td>
                <td>Bob Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-primary">Approved</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>175</td>
                <td>Mike Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-danger">Denied</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ResponsiveTable;