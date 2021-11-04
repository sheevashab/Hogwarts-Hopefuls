import api from './apiConfig';

export const getAllHouses = async () => {
  const resp = await api.get('/houses');
  console.log(resp.data)
  return resp.data;
}

export const getOneHouse = async (id) => {
  const resp = await api.get(`/houses/${id}`)
  return resp.data;
};