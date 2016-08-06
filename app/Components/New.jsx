import React, { Component } from 'react';
import Layout from './Layout.jsx';

var users = [{LYSING:'testuser2',
  NOTANDIID: 1
  }]
class New extends {
    render() {
        console.log("Debug this.props.users ", this.props.users);
        var userNodes = users.map(function(u) {
            return ( <button className = 'pure-u-1-4 pure-button'> {u.LYSING} </button>)
        });
        return (
          <Layout>
            <a className = 'nyr-notandi pure-button' href = '/'>Baka</a> <div className = 'pure-g'> {userNodes} </div>
          </Layout>
        );
    }
};

export default New;
