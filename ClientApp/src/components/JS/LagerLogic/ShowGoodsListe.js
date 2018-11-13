import React, { Component } from 'react';
import $ from 'jquery';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export class ShowGoodsListe extends Component{

    displayName = ShowGoodsListe.name

    constructor(props) {
        debugger;
        super(props);
        this.state = { warenDaten: [] };

        method:'GET',
        fetch('https://localhost:44323/api/LagerObjekt',
            {

                mode: 'no-cors'
            }
            ).then(data => {
                this.setState({ warenDaten: data });
            });
    }





    static getWarenDaten(warenDaten) {
        return (<div>
            <table className='table'  >
                <thead>
                    <tr>
                        <th>Artikelbezeichnung</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {warenDaten.map(warenDaten =>
                        <tr key={warenDaten.id}>
                            <td>{warenDaten.id}</td>
                            <td>{warenDaten.bezeichnung}</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>            );
    }

    render() {
        ShowGoodsListe.getWarenDaten(this.state.warenDaten);

        return (
            <div>
                {ShowGoodsListe.getWarenDaten(this.state.warenDaten)}

                </div>            
            );
    }
}