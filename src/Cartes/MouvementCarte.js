import React, { Component } from "react";
import MoneySysService from "../Services/MoneySysService"

export default class MouvementCarte extends Component {

  constructor(props) {
    super(props)

    this.state = {
            cartes: [],    
            cpa_RIB : '',
            car_NOM : '',
            car_NUMCARTE : '',
            
            currentPage : 1,
            employeesPerPage : 5
            
    }
    
    this.searchData1= this.searchData1.bind(this);
}

componentDidMount(){
  MoneySysService.getCartes().then((res) => {
      this.setState({ cartes: res.data});
  });

}

changePage = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
};

firstPage = () => {
  if(this.state.currentPage > 1) {
      this.setState({
          currentPage: 1
      });
  }
};

prevPage = () => {
  if(this.state.currentPage > 1) {
      this.setState({
          currentPage: this.state.currentPage - 1
      });
  }
};

lastPage = () => {
  if(this.state.currentPage < Math.ceil(this.state.porteurs.length / this.state.employeesPerPage)) {
      this.setState({
          currentPage: Math.ceil(this.state.porteurs.length  / this.state.employeesPerPage)
          
      });
  }
};

nextPage = () => {
  if(this.state.currentPage < Math.ceil(this.state.employees.length / this.state.employeesPerPage)) {
      this.setState({
          currentPage: this.state.currentPage + 1
      });
  }
};

searchChange = event =>{
  this.setState({
    [event.target.name] : event.target.value
  });
};

searchData1(){
  this.props.history.push(`/one-carte/${this.state.cpa_RIB}/${this.state.car_NOM}/${this.state.car_NUMCARTE}`);
};


 

  render() {

    const {cartes, currentPage ,employeesPerPage ,cpa_RIB,car_NOM,car_NUMCARTE} =this.state;

    const lastIndex = currentPage * employeesPerPage;
    const firstIndex = lastIndex - employeesPerPage;
    const currentUsers = cartes.slice(firstIndex, lastIndex);
    const totalPages = cartes.length / employeesPerPage;

    return (
      <div>
        <div class="money-acceuill mt-2 px-3 py-3">
          <h3>Mouvements carte :</h3>

          <div class="acceuil-title-1 pt-4">
            <fieldset class="scheduler-border">
              <legend class="scheduler-border">
                indiquez vos valeurs de recherche
              </legend>

              <form class="mx-1">
                <div className="row">

                  <div className="col-lg-4">
                    <div class="form-group">
                      <input
                        type="text"
                        name="cpa_RIB"
                        value={cpa_RIB}
                        onChange={this.searchChange}
                        class="form-control"
                        id="ncompte"
                        placeholder="Numero de compte"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                  <div class="form-group">
                  <input
                    type="text"
                    name="car_NOM"
                    value={car_NOM}
                    onChange={this.searchChange}
                    class="form-control"
                    id="nom"
                    aria-describedby="emailHelp"
                    placeholder="Nom porteur"
                  />
                </div>
                  </div>

                  <div className="col-lg-4">
                  <div class="form-group">
                  <input
                    type="text"
                    name="car_NUMCARTE"
                    value={car_NUMCARTE}
                    onChange={this.changePage}
                    class="form-control"
                    id="num"
                    aria-describedby="emailHelp"
                    placeholder="numero carte"
                  />
                </div>
                      </div>
                </div>


               

                <button type="button" onClick={this.searchData1} class="btn btn-search float-right">
                  Chercher
                </button>
              </form>
            </fieldset>
          </div>
          <h3>Carte en Mouvements :</h3>

          <table class="table table-bordered table-striped mt-3">
            {/* */}
            <thead>
              <tr>
                <th scope="col">Num carte</th>
                <th scope="col">Type carte</th>
                <th scope="col">Porteurs</th>
                <th scope="col">Compte priamire</th>
                <th scope="col">Etat carte</th>
                <th scope="col">Code banque</th>
                <th scope="col">Code agence</th>
              </tr>
            </thead>
            <tbody>

              {
                currentUsers.map(
                  carte =>
                  <tr>
                      <td key = {carte.car_NUMCARTE}>{carte.car_NUMCARTE}</td>
                      <td >{carte.car_TYPECARTE}</td>
                      <td >{carte.car_NOM}</td>
                      <td >{carte.cpa_RIB}</td>
                      <td >{carte.car_ETATCARTE}</td>
                      <td> {carte.car_BANQUE}</td>
                      <td >{carte.car_AGENCE}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
