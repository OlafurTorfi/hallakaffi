import React, { Component } from 'react';
import Layout from './Layout.jsx'

class Uppgjor extends Component {
    render() {
        return (
            <Layout>
                <a className='nyr-notandi pure-button' href='/'>Baka</a>
                <div className='pure-g'>
                    <input className='pure-u-1-4 pure-button' type='number' step="100">-100</input>
                </div>
            </Layout>
        );
    }
});
export default Uppgjor;
