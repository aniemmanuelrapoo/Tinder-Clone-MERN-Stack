import axios from 'axios'

const instance = axios.create({
    baseURL: "https://ani-emmanuel-tinder-backend.herokuapp.com"
})

export default instance;