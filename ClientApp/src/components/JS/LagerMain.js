import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class LagerMain extends Component {
    displayName = LagerMain.name;    
    constructor(props) {
        super(props);    
        this.state = {
            showComponent: false,
            Lager: 'Lager',
            LagerArt: 'LagerArt',
            LagerObjekt: 'LagerObjekt',
            LagerPosition: 'LagerPosition'            
        };
        this._onButtonClick = this._onButtonClick.bind(this);        
    }
    _onButtonClick(event) {
        this.setState({
            showComponent: true
        });
    }
    
    //<CrudSelection name='Peter' />
    render() {
        return (
            <div>
                < button onClick={this._onButtonClick} id='Lager' > Create</button>;                
            </div>
        );
    }
}