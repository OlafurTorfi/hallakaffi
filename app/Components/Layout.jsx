import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        <div className='banner'>
            <span className='banner-title'>Greidðsluþjónusta Hallakaffis</span>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default Layout;
