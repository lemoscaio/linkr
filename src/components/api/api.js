import axios from "axios";

const api = axios.create({
    baseURL:"https://api-back-linkr.herokuapp.com/"
});

export default api;