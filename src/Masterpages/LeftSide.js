import React, { Component } from "react";
import { Link} from "react-router-dom";

export default class LeftSide extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column nav-pills mt-3"  id="v-pills-tab"
                role="tablist" aria-orientation="vertical"> 

        <li className="nav-item">
                <Link className="nav-link" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
          </li>



          <li className="nav-item">

                
        
                <Link className="nav-link" to="/porteurs"><i class="fa fa-google-wallet" aria-hidden="true"></i> Porteurs</Link>

                <div class="sidebar-content">
                <ul>
                  
                    
        
                    <li class="sidebar-dropdown">
                        <a class="nav-link" href="#">
                            
                            <span><i className="fa fa-credit-card-alt"></i> Carte</span>  
                             <i class="fa fa-chevron-down float-right pt-1"   aria-hidden="true"></i>  
                             {/* <Link className="nav-link menu-text"><i class="fa fa-google-wallet" aria-hidden="true"></i> Porteurs</Link> */}
                             
                        </a>
                        <div class="sidebar-submenu">
                            <ul> 
                                <li><Link className="s-nav-link" to="/porteurs">  Ajouter Carte</Link></li> 
                                <li><Link className="s-nav-link" to="/mouvementcarte">  Mouvements Cartes</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Base</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Instance</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Generation</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Activation de carte</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Annulation carte</Link></li> 
                                <li><Link className="s-nav-link" to="/porteurs">  Opposition d'une carte</Link></li> 
                            </ul>
                        </div>
                    </li>
                  

                
                   
                   
                </ul>
            </div>
                

                        
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/commercants"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Commercants</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/comptes"><i class="fa fa-sign-in" aria-hidden="true"></i> Comptes</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/autorisation"><i class="fa fa-lock" aria-hidden="true"></i> Autorisation</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/surveillance"><i class="fa fa-shield" aria-hidden="true"></i> Surveillance</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/traitement"><i class="fa fa-trademark" aria-hidden="true"></i> Traitement</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/parametre"><i class="fa fa-cogs" aria-hidden="true"></i> Parametre</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/rapport"><i class="fa fa-flag" aria-hidden="true"></i> Rapport</Link>
          </li>

        </ul>
      </div>
    );
  }
}
