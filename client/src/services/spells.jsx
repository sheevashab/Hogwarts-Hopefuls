import api from './apiConfig';

export const getOneSpell = async () => {
  const resp = await api.get(`/sorting/spell/${id}`)
  return resp.data;
};