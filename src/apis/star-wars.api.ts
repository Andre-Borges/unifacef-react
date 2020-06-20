import axios from 'axios';

const baseURL = process.env.REACT_APP_STAR_WARS_BASEURL; // trocar por env de ambiente

export const getFilms = async () => {
  return axios.request({ baseURL, url: 'films' });
};

export const getFilmById = async (id: number) => {
  return axios.request({ baseURL, url: `films/${id}` });
};