import React, { Component } from 'react';

export class InsertGoods extends Component {

    displayName = InsertGoods.displayName;

    constructor(props) {
        super(props);
        this.state = ({
            bezeichnung: ''
        });
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }
    save() {        



    }
    handleChange(event) {
        this.setState({
            bezeichnung: event.target.value
        });
    }
    reset() {
        this.setState({
            bezeichnung: ''          
        });
    }
    render() {
        return (
            <div>
                <label>Bezeichnung:</label>
                <input type="text" value={this.state.bezeichnung} onChange={this.handleChange} />
                <br/>
                <button onClick={this.save}>Save</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }    
}