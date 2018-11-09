import React, { Component } from 'react';
import $ from 'jquery';

export class ShowGoodsListe extends Component{

    displayName = ShowGoodsListe.name

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                <p>ShowGoodsListe</p>
                    <table className='table' >
                        <th>Titel1</th><th>Titel2</th><th>Titel3</th>
                    <tr>
                        <td>eins</td><td>zwei</td><td>drei</td>
                    </tr>
                        <tr> <td>eins</td><td>zwei</td><td>drei</td>  </tr>
                        <tr> <td>eins</td><td>zwei</td><td>drei</td>  </tr>
                        <tr> <td>eins</td><td>zwei</td><td>drei</td>  </tr>
                    </table>
                </div>            
            );
    }
}