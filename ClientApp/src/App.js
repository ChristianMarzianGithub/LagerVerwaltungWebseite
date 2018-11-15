import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/JS/Layout';
import { Home } from './components/JS/Home';
import { FetchData } from './components/JS/FetchData';
import { Counter } from './components/JS/Counter';
import { ShowGoods } from './components/JS/LagerLogic/ShowGoods';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/JS/counter' component={Counter} />
        <Route path='/JS/fetchdata' component={FetchData} />      
        <Route path='/JS/LagerLogic/ShowGoods' component={ShowGoods} />           
      </Layout>
    );
  }
}