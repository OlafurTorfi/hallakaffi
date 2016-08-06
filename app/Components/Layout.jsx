import React, { Component } from 'react';
import candycanes from '../Assets/candycanes.jpg';
import faviconUrl from '../Assets/favicon.ico';

class Layout extends Component {
  render() {
    var divStyle = {
      backgroundImage: candycanes
    };
    return (
      <div>
        <div className='banner'>
            <span className='banner-title' style={divStyle}>Greiðsluþjónusta Hallakaffis</span>
            <img url={faviconUrl}/>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default Layout;
