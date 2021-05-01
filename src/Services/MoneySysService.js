
import axios from 'axios'


const PORTEUR_API_BASE_URL = "http://localhost:8081/api/v1/porteurs";
const PORTEUR_API_SEARCH_URL = "http://localhost:8081/api/v1/porteurss";
const PORTEUR_API_SEARCH_URL_Rib = "http://localhost:8081/api/v1/porteurRib";
const PORTEUR_API_SEARCH_URL_name = "http://localhost:8081/api/v1/porteurNom";
const CARTE_API_BASE_URL = "http://localhost:8081/api/v1/cartes";
const CARTE_API_SEARCH_URL = "http://localhost:8081/api/v1/cartes1";



class MoneySysService  {
    
    getPorteurs(){
        return axios.get(PORTEUR_API_BASE_URL);
    }

    searchporteursByRib(cmp_RIB){
        return axios.get(PORTEUR_API_SEARCH_URL_Rib + '/' + cmp_RIB);
    }

    searchporteursbyname(por_NOM){
        return axios.get(PORTEUR_API_SEARCH_URL_name + '/' + por_NOM);
    }



    searchPorteurs(cmp_RIB ,por_NOM){
        return axios.get(PORTEUR_API_SEARCH_URL + '/' + cmp_RIB + '/' + por_NOM);
    }

    getCartes(){
        return axios.get(CARTE_API_BASE_URL);
    }

  
    searchcartes( cpa_RIB,car_NOM,car_NUMCARTE){
        return axios.get(CARTE_API_SEARCH_URL + '/' + cpa_RIB + '/' + car_NOM + '/' + car_NUMCARTE);
    }

}

export default new MoneySysService()
