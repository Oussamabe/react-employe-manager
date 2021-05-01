import React, { Component } from "react";  
import MoneySysService from "../Services/MoneySysService";


export default class Porteurs extends Component {

  constructor(props) {
    super(props)

    this.state = {
            porteurs: [],    
            cmp_RIB : '' ,
            por_NOM : '',
            currentPage : 1,
            employeesPerPage : 5
            
    }

    
     this.searchporteurRib = this.searchporteurRib.bind(this);
     this.searchporteurname =this.searchporteurname.bind(this);
    this.searchData = this.searchData.bind(this);
   
   
    


}

 

componentDidMount(){
  MoneySysService.getPorteurs().then((res) => {
      this.setState({ porteurs: res.data});
  });

  // MoneySysService.searchPorteurs(this.state.cmp_RIB).then( res => {
  //   this.setState({  porteurs: res.data});
  //   })
}


searchporteurRib(){
  this.props.history.push(`/search-porteur-rib/${this.state.cmp_RIB}`);
};

searchporteurname(){
  this.props.history.push(`/search-porteur-name/${this.state.por_NOM}`);
}


searchData(){
  this.props.history.push(`/search-porteurs/${this.state.cmp_RIB}/${this.state.por_NOM}`);
};

 




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
    [event.target.name] : parseInt(event.target.value)
  });
};

  


 

  render() {

    const {porteurs, currentPage ,employeesPerPage ,cmp_RIB,por_NOM} =this.state;

    const lastIndex = currentPage * employeesPerPage;
    const firstIndex = lastIndex - employeesPerPage;
    const currentUsers = porteurs.slice(firstIndex, lastIndex);
    const totalPages = porteurs.length / employeesPerPage;

    return (
      <div>
        <div className="money-acceuill mt-2 px-3 py-3">
          <h3>Porteurs :</h3>
          
          <div className="acceuil-title pt-4">

            <fieldset className="scheduler-border">
              <legend className="scheduler-border">
                indiquez vos valeurs de recherche
              </legend>

              <form className="mx-5">
                <div className="form-group">
                  <label for="ncompte">Numero de compte</label>
                  <input
                    type="text"
                    name="cmp_RIB"
                    value={cmp_RIB}
                    onChange={this.changePage}
                    className="form-control"
                    id="cmp_RIB"
                    placeholder="Numero de compte"
                  /> {this.props.cmp_RIB}
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Nom porteur</label>
                  <input
                    type="text"
                    name="por_NOM"
                    value={por_NOM}
                    onChange={this.changePage}
                    className="form-control"
                    id="Nom porteur"
                    placeholder="Nom porteur"
                  />
                </div>

                <button type="button" onClick={this.searchporteurname} className="btn btn-search">
                  Chercher
                </button> &nbsp;
                <a
                  href="#"
                  className="btn btn-parametre"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Plus de parametre
                </a>
              </form>
            </fieldset>

            <div className="modal-s-avance">
              {/* modal  */}

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Recherche avancee
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* form avancee    */}
                      <form action="">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                type="text"
                                name="cmp_RIB"
                                value={cmp_RIB}
                                onChange={this.changePage}
                                id="cmp_RIB"
                                placeholder="Numero de compte"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="por_NOM"
                                value={por_NOM}
                                onChange={this.changePage}
                                className="form-control  form-control-sm"
                                id="Nom porteur"
                                placeholder="Nom porteur"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                                placeholder="Prenom"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                                placeholder="code professionelle"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                                placeholder="Ville"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                                placeholder="Langue"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                required
                                placeholder="agence"
                              />
                            </div>
                          </div>
                        </div>
                      </form>

                      {/* form avancee    */}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-close"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" data-dismiss="modal" onClick={this.searchData} className="btn btn-search">
                        Chercher
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3>Liste des Porteurs :</h3>

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
                                {
                                   currentUsers.map(
                                        porteur => 
                                        <tr key = {porteur.id}>
                                          
                                            <td> {porteur.cmp_RIB} </td>
                                             <td> {porteur.por_NOM} </td>   
                                             <td> {porteur.por_CIN}</td>
                                             <td> {porteur.por_SEXE}</td>
                                             <td> {porteur.por_PRENOM}</td>
                                             <td> {porteur.por_DATEN}</td>
                                             <td>
                                                 <button   className="btn btn-info"><i class="fa fa-pencil" aria-hidden="true"></i> </button>
                                                 <button style={{marginLeft: "10px"}}   className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> </button>
                                                 <button style={{marginLeft: "10px"}}    className="btn btn-info"><i class="fa fa-eye" aria-hidden="true"></i> </button>
                                             </td>
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
