import axios from 'axios';

const baseURL = 'https://star-wars-api-facefx.herokuapp.com'; // trocar por env de ambiente

export const getFilms = async () => {
  return axios.request({ baseURL, url: 'films' });
};

export const getFilmById = async (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` });
};
