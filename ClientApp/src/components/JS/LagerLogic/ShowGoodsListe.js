import React, { Component } from 'react';
import $ from 'jquery';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class ShowGoodsListe extends Component{

    displayName = ShowGoodsListe.name

    constructor(props) {
        super(props);
        this.state = { warenDatens: [], loading: true };

        fetch('api/WebServiceHelper/getData')
            .then(response => response.json())
            .then(data => {
                this.setState({ warenDatens: data, loading: false });
            });
    }

    static renderWarenDatenTable(warenDatens) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Bezeichnung</th>
                    </tr>
                </thead>
                <tbody>
                    {warenDatens.map(warenDaten =>
                        <tr key={warenDaten.id}>
                            <td>{warenDaten.id}</td>
                            <td>{warenDaten.bezeichnung}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ShowGoodsListe.renderWarenDatenTable(this.state.warenDatens);

        return (
            <div>                
                {contents}
            </div>
        );
    }
}