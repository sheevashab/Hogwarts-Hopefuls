import api from './apiConfig';

export const getAllSpells = async () => {
  const resp = await api.get('/spells');
  return resp.data;
}

export const getOneSpell = async (id) => {
  const resp = await api.get(`/spells/${id}`)
  return resp.data;
};