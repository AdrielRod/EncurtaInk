import axios from "axios";

const urlAdriel = 'http://192.168.1.107:3333'


const apiLink = axios.create({
  baseURL: 'https://url.api.stdlib.com/temporary@0.3.0/',
  timeout: 10000,
});

const apiLogin = axios.create({
  baseURL: urlAdriel
})

export { apiLink, apiLogin }