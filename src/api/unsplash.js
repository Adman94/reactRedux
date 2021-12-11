import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2pta7GzPzT-ch2zWZ0pM5EZXSldi8H-0d9sjbm9RwNw'
  }
})