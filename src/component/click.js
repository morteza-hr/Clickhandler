import React, { Component } from 'react';

class Click extends Component {

    clickhandler=()=>{
        console.log('clicked me')
    }
    render() { 
        return (
        <div>
            <button onClick={this.clickhandler}>
                click me
            </button>
        </div>
        );
    }
}
 
export default Click;
