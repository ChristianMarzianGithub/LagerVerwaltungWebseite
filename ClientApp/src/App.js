import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/JS/Layout';
import { Home } from './components/JS/Home';
import { FetchData } from './components/JS/FetchData';
import { Counter } from './components/JS/Counter';
import { LagerMain } from './components/JS/LagerMain';
import { Lager } from './components/JS/LagerLogic/Lager';
import { LagerPosition } from './components/JS/LagerLogic/LagerPosition';
import { LagerArt } from './components/JS/LagerLogic/LagerArt';
import { LagerObjekt } from './components/JS/LagerLogic/LagerObjekt';
import { ShowGoods } from './components/JS/LagerLogic/ShowGoods';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/JS/counter' component={Counter} />
        <Route path='/JS/fetchdata' component={FetchData} />
        <Route path='/JS/LagerMain' component={LagerMain} />
        <Route path='/JS/LagerLogic/Lager' component={Lager} />
        <Route path='/JS/LagerLogic/LagerPosition' component={LagerPosition} />
        <Route path='/JS/LagerLogic/LagerArt' component={LagerArt} />        
        <Route path='/JS/LagerLogic/LagerObjekt' component={LagerObjekt} />            
        <Route path='/JS/LagerLogic/ShowGoods' component={ShowGoods} />            
      </Layout>
    );
  }
}
