import React, { Component } from 'react';
import { ShowGoodsListe } from './ShowGoodsListe';
import { InsertGoods } from './InsertGoods';
import { DropDownListe } from './DropDownListe';

export class ShowGoods extends Component {
    displayName = ShowGoods.name;

    constructor(props) {
        super(props);
        
    }
    render() {    
        return (
            <div>                
                <DropDownListe label='LagerArt' webservice='getDataOptionsLagerArt' />
                <DropDownListe label='Lager' webservice='getDataOptionsLager' />
                <DropDownListe label='Kategorie' webservice='getDataOptionsLagerObjekt' />
                <InsertGoods />
                <h1>Waren anzeigen</h1>
                <ShowGoodsListe />
            </div>
        );
    }
}