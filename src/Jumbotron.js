import React, { Component } from "react";
import imgbank from './images/logo.png'; 



import './App.css';

export default class Jumbotron extends Component {
  render() {
  //   const bgimg = {
  //     backgroundImage: "url(" + Background + ")",
  // backgroundsize: cover,
  // backgroundrepeat: no-repeat,
  //   };
    return (

      <div>
        <div  className="bg-img">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-10">
                <div className="title">
                  <h2>MoneySys Interbank Burnudi</h2>
                  <h6>..Plus qu'un systeme bancaire</h6>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="jumbo-img">
                  <img src={imgbank} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
