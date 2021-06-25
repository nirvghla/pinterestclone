import axios from 'axios'

export default axios.create({
  baseUrl: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID KUboEjhR75dM_WBa_Y-e7YPJ-dvIfqpGqibzyNUN2mA'
  }
})
