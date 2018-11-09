import React, { Component } from 'react';

export class Addition extends Component {
    displayName = Addition.name

    constructor(props) {
        super(props);
        this.state = {
            res: this.doIt()
        };
        this.doIt = this.doIt.bind(this);        
    }
    doIt() {
        var retVal = this.props.one + this.props.two;
        return retVal;
    }
    render() {        
        return (            
            <div>           
                <p>{this.state.res}</p>
            </div>
        );
    }
}