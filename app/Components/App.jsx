import React, { Component } from 'react';
import Layout from './Layout.jsx';
import User from './User.jsx';

let customers = [{LYSING:'testuser',
  STADA:1000,
NOTANDIID: 1
},{LYSING:'testuser2',
  STADA:100,
NOTANDIID: 2
},{LYSING:'testuser3',
  STADA:200,
NOTANDIID: 3
},{LYSING:'testuser4',
  STADA:4000,
NOTANDIID: 4
}];

class App extends Component {
  render() {
    var userNodes = customers.map(function(u) {
      console.log(u, 'blaaa');
        return (
            <User lysing={u.LYSING} stada={u.STADA} id={u.NOTANDIID} key={u.NOTANDIID}></User>
        )
    });
    return (
      <div>
        <Layout>
            <a className='nyr-notandi pure-button' href='/new'>Nýr</a>
            <div className='pure-g'>
                {userNodes}</div>
        </Layout>
      </div>
    );
  }
}

export default App;
