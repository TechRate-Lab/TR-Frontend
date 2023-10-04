import axios from 'axios'

export const api = axios.create({
    baseURL:'https://api-take-a-peek.onrender.com',
})