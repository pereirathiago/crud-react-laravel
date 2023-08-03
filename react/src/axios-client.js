import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`,
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  try {
    const { response } = error
    if (response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  } catch (error) {
    console.error(error)
  }

  throw error
})

export default axiosClient