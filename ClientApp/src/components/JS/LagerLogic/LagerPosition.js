import React, { Component } from 'react';


export class LagerPosition extends Component {
    displayName = LagerPosition.name

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>LagerObjekte:</h1>
                <h1>Lager:</h1>
                <h1>LagerArten:</h1>
            </div>
        );
    }
}