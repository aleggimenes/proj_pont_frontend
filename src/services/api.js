import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});
api.interceptors.request.use(async (config) => {
  try {
    const token = await localStorage.getItem('token');
    const user = await localStorage.getItem('user');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config.status)
    return config;
  } catch (response) {
    console.log(response.data.error);

  }
});
api.interceptors.response.use((response) => {

  if (response.data.error === 400) {
  console.log('entrou aqui: ', response.data)

    throw response;
  } else {
    if (response.data.error != undefined) {
      return window.alert(`${response.data.error}`);
    }
    return response;
  }


});
export default api;
