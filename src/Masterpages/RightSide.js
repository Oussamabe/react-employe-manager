import React, { Component } from 'react'
import Porteurs from "../images/porteurs.png";
import Cartes from "../images/cartes.png";
import Comptes from "../images/comptes.png";
import ChaineComm from "../images/commercant.png";
import Commercants from "../images/chaune.png";
import Autorisations from "../images/autorisation.png";
import { Link} from "react-router-dom";



export default class RightSide extends Component {
    render() {
        return (
            <div>
                 <div className="money-acceuill mt-2 px-3 py-3">
                 <h3>MoneySys Accueil :</h3>
                 <div className="acceuil-title text-center pt-4">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border">Liens Raccourcis</legend>
                <div className="control-group">
                  <div className="row">
                       {/* Porteurs    */}
                    <div className="col-lg-4">
                      <Link to="/porteurs">
                        <div className="lien-img">
                          <img src={Porteurs} alt="hhtuy" />
                        </div>
                        {/* <a href="#"> Porteurs</a> */}
                        <Link   to="/porteurs">Porteurs</Link>
                      </Link>
                    </div>
                     {/* Porteurs    */}

                   {/* cartes  */}
                    <div className="col-lg-4">
                      <Link to="/mouvementcarte">
                        <div className="lien-img">
                          <img src={Cartes} alt="" />
                        </div>
                        <Link to="/mouvementcarte" >Cartes</Link>
                      </Link>
                    </div>
                    {/* cartes  */}

                    {/* Comptes  */}
                    <div className="col-lg-4">
                      <a href="#">
                        <div className="lien-img">
                          <img src={Comptes} alt="" />
                        </div>
                        <a href="#">Comptes</a>
                      </a>
                    </div>
                    {/* Comptes  */}
                  </div>

                  <div className="row mt-4">
                   {/* Porteurs  */}
                    <div className="col-lg-4">
                      <a href="#">
                        <div className="lien-img">
                          <img src={ChaineComm} alt="" />
                        </div>
                        <a href="#"
                          >Chaine de <br />
                          Commercant</a
                        >
                      </a>
                    </div>
                    {/* Porteurs  */}

                    {/* Cartes  */}
                    <div className="col-lg-4">
                      <a href="#">
                        <div className="lien-img">
                          <img src={Commercants} alt="" />
                        </div>
                        <a href="#">Commercants</a>
                      </a>
                    </div>
                    {/* Cartes  */}

                   {/* Comptes  */}
                    <div className="col-lg-4">
                      <a href="#">
                        <div className="lien-img">
                          <img src={Autorisations} alt="" />
                        </div>
                        <a href="#">Autorisations</a>
                      </a>
                    </div>
                     {/* Comptes  */}
                  </div>
                </div>
              </fieldset>
            </div>
                 </div>
            </div>
        )
    }
}
