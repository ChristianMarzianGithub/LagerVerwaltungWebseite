import React, { Component } from 'react';
import { ShowGoodsListe } from './ShowGoodsListe';


export class ShowGoods extends Component {
    displayName = ShowGoods.name

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Waren anzeigen</h1>
                <ShowGoodsListe />
            </div>
        );
    }
}