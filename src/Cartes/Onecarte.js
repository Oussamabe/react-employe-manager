import React, { Component } from 'react'
import CarteService from "../Services/MoneySysService"

export default class Onecarte extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cpa_RIB: this.props.match.params.cpa_RIB,
            car_NOM : this.props.match.params.car_NOM,
            car_NUMCARTE : this.props.match.params.car_NUMCARTE,
            cartes: {}
        }
    }

    componentDidMount(){
       CarteService.searchcartes(this.state.cpa_RIB , this.state.car_NOM , this.state.car_NUMCARTE).then(res => {
            this.setState({cartes : res.data[0]});
        })
    }

    cancel() {
        this.props.history.push("/mouvementcarte");
      }

    render() { 
        return (
            <div>
                 
                 <div className="money-acceuill mt-2 px-3 py-3">
          <h3>Carte en Mouvements :</h3>
          
         

           

          <table className="table table-bordered table-striped mt-5">
                                <thead>
                                  <tr>
                                    
                                    <th scope="col">Num carte</th>
                                    <th scope="col">Type carte</th>
                                    <th scope="col">Porteurs</th>
                                    <th scope="col">Compte primaire</th>
                                    <th scope="col">Etat carte</th>
                                    <th scope="col">code banque</th>
                                    <th scope="col">code agnece</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    <td>{this.state.cartes.car_NUMCARTE}</td>
                                    <td>{this.state.cartes.car_TYPECARTE}</td>
                                    <td>{this.state.cartes.car_NOM}</td>
                                    <td>{this.state.cartes.cpa_RIB}</td>
                                    <td>{this.state.cartes.car_ETATCARTE}</td>
                                    <td>{this.state.cartes.car_ETATCARTE}</td>
                                    <td>{this.state.cartes.car_AGENCE}</td>
                              
                            </tbody>
                              </table>

                              <button type="button" onClick={this.cancel.bind(this)} className="btn btn-search">
                  back to list
                </button> &nbsp;



        </div>
                   
            </div>
        )
    }
}
