import axios from 'axios';

const API_URL = 'http://192.168.0.103:8080'
axios.defaults.baseURL = API_URL

class Api {
    cadastrarPessoa(pessoa) {
        return axios.post(`/pessoas`, pessoa)
    }
    listarGrupos() {
        return axios.get('/grupos-prioridades')
    }
}

export default new Api()