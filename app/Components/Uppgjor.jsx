import React, { Component } from 'react';
import Layout from './Layout.jsx'

class Uppgjor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upphaed: this.props.params.stada
        }
        this.uppgjor = this.uppgjor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    uppgjor(){
        console.log("Attempt uppgjör");
        var xhr = new XMLHttpRequest();
        xhr.open('post', '/users/pay/'+ this.props.params.id + '/'+ this.state.upphaed, true);
        xhr.onload = () => {
          console.log("Debug xhr.responseText ", xhr.responseText);
          var data = JSON.parse(xhr.responseText);
          console.log(data);
        };
        xhr.send();
    }
    handleChange(event){
        this.setState({upphaed: event.target.value});
    }
    render() {
        return (
            <Layout>
                <a className='nyr-notandi pure-button' href='/'>Til Baka</a>
                <div className='pure-g'>
                    <input className='pure-u-1-4 pure-button' type='number' step="100" placeholder={this.state.upphaed} onChange={this.handleChange}></input>
                    <button className='pure-u-1-4 pure-button tm-button' onClick={this.uppgjor}>Gera upp</button>
                </div>
            </Layout>
        );
    }
};
export default Uppgjor;
