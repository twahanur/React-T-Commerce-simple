import React from 'react'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/shop">
              <Shop></Shop>
          </Route>

          <Route path="/review">
              <Review></Review>
          </Route>

          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>

          <Route exact path="/">
              <Shop></Shop>
          </Route>

          <Route exact path="/product/:productKey">
              <ProductDetails></ProductDetails>              
          </Route>

          <Route  path="/*">
              <Error></Error>
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
