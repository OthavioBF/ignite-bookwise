import axios from 'axios'

// Use in react component
export const ClientAxios = axios.create({
  baseURL: '/api',
})

// Use in getServerSideProps
export const SystemAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
})
