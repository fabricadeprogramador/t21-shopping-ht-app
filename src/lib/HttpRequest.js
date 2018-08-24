const API_URL = "http://localhost:5000/";
import axios from 'axios'

export default{

    getProdutos() {
        return fetch(API_URL + "produtos")
          .then(response => response.json())
      }
};