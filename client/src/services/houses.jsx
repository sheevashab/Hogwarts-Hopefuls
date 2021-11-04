import api from './apiConfig';

export const getOneHouse = async () => {
  const resp = await api.get(`/sorting/house/${id}`)
  return resp.data;
};