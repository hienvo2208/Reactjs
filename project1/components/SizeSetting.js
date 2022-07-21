import React, { Component } from 'react';

class SizeSetting extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Size 15px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success">Giảm</button>
                <button type="button" className="btn btn-success">Tăng</button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">Reset</button>
          </div>
        );
    }
}
export default SizeSetting;
