import React, { Component } from 'react'
import PorteurService from "../Services/MoneySysService"

export default class OnePorteurByrib extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cmp_RIB: this.props.match.params.cmp_RIB,
            porteurs: {}
        }
    }

    componentDidMount(){
        PorteurService.searchporteursByRib(this.state.cmp_RIB).then(res => {
            this.setState({porteurs : res.data[0]});
        })
    }

    cancel() {
        this.props.history.push("/porteurs");
      }

    render() {
        return (
            <div>
            <div className="money-acceuill mt-2 px-3 py-3">
   <h3>Porteur :</h3>
   <table className="table table-bordered table-striped mt-5">
                         <thead>
                           <tr>
                             
                             <th scope="col">N de compte</th>
                             <th scope="col">nom et prenom</th>
                             <th scope="col">CIN</th>
                             <th scope="col">Sexe</th>
                             <th scope="col">Banque</th>
                             <th scope="col">Agence</th>
                           </tr>
                         </thead>
                         <tbody>
                             <td>{this.state.porteurs.cmp_RIB}</td>
                             <td>{this.state.porteurs.por_NOM}</td>
                             <td>{this.state.porteurs.por_CIN}</td>
                             <td>{this.state.porteurs.por_SEXE}</td>
                             <td>{this.state.porteurs.por_CODEBANQUE}</td>
                             <td>{this.state.porteurs.por_DATEN}</td>
                       
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
