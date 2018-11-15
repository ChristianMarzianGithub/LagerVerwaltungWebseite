import React, { Component } from 'react';
import Select from 'react-select'; //https://react-select.com/home

export class DropDownListe extends Component{

    displayName = DropDownListe.name;
    constructor(props) {
        super(props);

        this.state = {
            options:[]
        };



        fetch('api/WebServiceHelper/' + this.props.webservice )
            .then(response => response.json())
            .then(data => {
                this.setState({ options: data, loading: false });
            });
    }


    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Select options={this.state.options} />
            </div>
        );
    }
}