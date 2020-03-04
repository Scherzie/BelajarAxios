import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import HitungKata from './component/hitungkata'
import {Switch, Route} from 'react-router-dom';
import Parkir from './component/parkir';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/hitungkata' exact component={HitungKata}/>
        <Route path='/parkir' exact component={Parkir}/>
      </Switch>
    </div>
  );
}

export default App;