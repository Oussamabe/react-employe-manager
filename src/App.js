import "./App.css";
import React, { Component } from "react";

import Header from "./Header";
import Jumbotron from "./Jumbotron";
import LeftSide from "./Masterpages/LeftSide";
import RightSide from "./Masterpages/RightSide";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Porteurs from "./Porteurs/Porteurs";
import OnePorteurByrib  from "./Porteurs/OnePorteurByrib";
import OneporteurByName from "./Porteurs/OneporteurByName";
import OnePorteurs from "./Porteurs/OnePorteurs";
import MouvementCarte from "./Cartes/MouvementCarte";
import Onecarte from "./Cartes/Onecarte";
import Commercants from "./Commercants/Commercants";
import Comptes from "./Comptes/Comptes" 
import Fotter from "./Footer";

 

export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
        <Header />

        <Jumbotron />

        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-2" style={{ backgroundColor: "#cdcccc" }}>
              <LeftSide />
            </div>

            <div className="col-lg-10">
            <Switch>
        <Route path="/" exact component={RightSide}></Route>
        <Route path="/porteurs"  component = {Porteurs} ></Route>
        <Route path="/search-porteur-rib/:cmp_RIB" component={OnePorteurByrib}></Route>
        <Route path="/search-porteur-name/:por_NOM" component={OneporteurByName}></Route>
        <Route path="/search-porteurs/:cmp_RIB/:por_NOM" component = {OnePorteurs} ></Route>
        <Route path="/mouvementcarte"  component = {MouvementCarte} ></Route>
        <Route path="/one-carte/:cpa_RIB/:car_NOM/:car_NUMCARTE" component= {Onecarte}></Route>
        <Route path="/commercants"  component = {Commercants} ></Route>
        <Route path="/comptes"  component = {Comptes} ></Route>
      </Switch>
            </div>
            </div>
            <div className="row mt-1">
            <div className="col-lg-12" style={{ padding: 0 }}>
              <Fotter />
            </div>
          </div>
            </div>

  
     
    </Router>
      </div>
    
    );
  }
}
