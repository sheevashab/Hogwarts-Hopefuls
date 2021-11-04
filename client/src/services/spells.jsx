import api from './apiConfig';

export const getOneSpell = async (id) => {
  const resp = await api.get(`/sorting/spell/${id}`)
  return resp.data;
};