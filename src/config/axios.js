import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL:
    'https://d0ad-2405-4802-1c88-45b0-b8e8-5507-ca75-7c3a.ap.ngrok.io/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})

// api.interceptors.request.use((config) => {
//   const token = Cookies.get('token');
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
// Add an Axios interceptor to handle expired tokens
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error is due to an expired token and we haven't already attempted to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      // Make a request to refresh the token
      const refreshToken = localStorage.getItem('refreshToken')
      const { data } = await axios.post(
        'https://your-api-url.com/refresh-token',
        { refreshToken },
      )

      // Update the original request's headers with the new token
      api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

      // Retry the original request
      return api(originalRequest)
    }

    return Promise.reject(error)
  },
)

export default api
