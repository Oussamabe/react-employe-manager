import React, { Component } from "react";
import { Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <ul className="nav flex-row sidebar-content">
          <li className="nav-item">
                
                <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/porteurs">Porteurs</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/mouvementcarte">Carte</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/commercants">Commercants</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/comptes">Comptes</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/autorisation">Autorisation</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/surveillance">Surveillance</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/traitement">Traitement</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/parametre">Parametre</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to="/rapport">Rapport</Link>
          </li>
         
          </ul>
        </div>
      </div>
    );
  }
}
