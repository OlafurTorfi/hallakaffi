import React, {Component} from 'react';
import {Link} from 'react-router';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stada: props.stada
        }
        this.increment = this.increment.bind(this);
    }
    increment() {
        console.log("Debug this.props ", this.props);
        this.setState({stada:this.state.stada + 100});
        var xhr = new XMLHttpRequest();
        xhr.open('post', '/users/buy/'+ this.props.id, true);
        xhr.onload = () => {
          console.log("Debug xhr.responseText ", xhr.responseText);
          var data = JSON.parse(xhr.responseText);
          console.log(data);
        };
        xhr.send();
    }
    render() {
        return (
            <div className='pure-u-1-3'>
                <button className='tm-button pure-button' onClick={this.increment}>{this.props.lysing}</button>
            <button className='gera-upp-button pure-button'><Link to={`/uppgjor/${this.props.id}/${this.state.stada}`}>{this.state.stada}</Link></button>
            </div>
        );
    }
};

export default User;
