import axios from 'axios';

const API_URL = 'http://192.168.0.103:8080'
axios.defaults.baseURL = API_URL

class Api {

    listarPessoas() {
        return axios.get(`/pessoas`);
    }

    atualizarPessoa(pessoa, codigo) {
        return axios.put(`/pessoas/${codigo}`, pessoa);
    }
}

export default new Api();