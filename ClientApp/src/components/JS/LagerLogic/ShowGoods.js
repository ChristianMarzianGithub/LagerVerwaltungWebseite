import React, { Component } from 'react';
import { ShowGoodsListe } from './ShowGoodsListe';
import { InsertGoods } from './InsertGoods';


export class ShowGoods extends Component {
    displayName = ShowGoods.name

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <InsertGoods />
                <h1>Waren anzeigen</h1>
                <ShowGoodsListe />
            </div>
        );
    }
}