import React, { Component } from 'react';
import Select from 'react-select'; //https://react-select.com/home

export class DropDownObjekt extends Component{

    displayName = DropDownObjekt.name;
    constructor(props) {
        super(props);
    }
    render() {
        const options = [
            { value: 'chocolate', label: 'test' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];



        return (
            <div>
                <Select options={options} />
            </div>
            
            );
    }
}