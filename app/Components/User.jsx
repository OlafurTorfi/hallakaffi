import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.uppgjor = this.uppgjor.bind(this);
    }
    increment() {
        console.log("Debug this.props.stada ", this.props.stada);
        this.props.stada = Number(this.props.stada) + 100;
    }
    uppgjor(){
      var xhr = new XMLHttpRequest();
      xhr.open('get', '/users/get', true);
      xhr.onload = () => {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      };
      xhr.send();
    }
    render() {
        return (
            <div className='pure-u-1-3'>
                <button className='tm-button pure-button' onClick={this.increment}>{this.props.lysing}</button>
                <button className='gera-upp-button pure-button' onClick={this.uppgjor}>{this.props.stada}</button>
            </div>
        );
    }
};

export default User;
