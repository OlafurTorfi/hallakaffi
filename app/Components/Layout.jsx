import React, { Component } from 'react';
import candycanes from '../Assets/candycanes.jpg';

class Layout extends Component {
  render() {
    var divStyle = {
      backgroundImage: candycanes
    };
    return (
      <div>
        <div className='banner'>
            <span className='banner-title' style={divStyle}>Greidðsluþjónusta Hallakaffis</span>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default Layout;
