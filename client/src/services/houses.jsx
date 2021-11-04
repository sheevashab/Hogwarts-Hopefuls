import api from './apiConfig';

export const getAllHouses = async () => {
  const resp = await api.get('/sorting/houses');
  return resp.data;
}

export const getOneHouse = async (id) => {
  const resp = await api.get(`/sorting/houses/${id}`)
  return resp.data;
};