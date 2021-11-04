import api from './apiConfig';

export const getOneHouse = async (id) => {
  const resp = await api.get(`/sorting/house/${id}`)
  return resp.data;
};