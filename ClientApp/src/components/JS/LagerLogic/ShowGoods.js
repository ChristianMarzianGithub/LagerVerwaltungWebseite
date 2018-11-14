import React, { Component } from 'react';
import 'react-dropdown/style.css';
import { ShowGoodsListe } from './ShowGoodsListe';
import { InsertGoods } from './InsertGoods';
import { DropDownObjekt } from './DropDownObjekt';

export class ShowGoods extends Component {
    displayName = ShowGoods.name;

    constructor(props) {
        super(props);
        
    }
    render() {      
        
        return (
            <div>
                <DropDownObjekt />
                <InsertGoods />
                <h1>Waren anzeigen</h1>
                <ShowGoodsListe />
            </div>
        );
    }
}