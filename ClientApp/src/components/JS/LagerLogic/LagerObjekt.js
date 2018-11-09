import React, { Component } from 'react';


export class LagerObjekt extends Component {
    displayName = LagerObjekt.name

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>LagerObjekt:</h1>
                <h1>Lager:</h1>
                <h1>LagerArt:</h1>
            </div>
        );
    }
}