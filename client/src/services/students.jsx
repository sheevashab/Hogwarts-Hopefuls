import api from './apiConfig';

export const getAllStudents = async () => {
  const resp = await api.get('/students');
  console.log(resp.data);
  return resp.data;
}

export const getOneStudent = async (id) => {
  const resp = await api.get(`/profile/${id}`);
  return resp.data;
}

export const postStudent = async (studentData) => {
  const resp = await api.post('/profile', { student: studentData });
  return resp.data;
}

export const putStudent = async (id, studentData) => {
  const resp = await api.put(`/profile/${id}`, { student: studentData });
  return resp.data;
};

export const deleteStudent = async (id) => {
  const resp = await api.delete(`/profile/${id}`);
  return resp;
};

export const addHouseToStudent = async (houseId, id) => {
  const resp = await api.put(`/sorting/houses/${houseId}/profile/${id}`);
  return resp.data;
}

export const addSpellToStudent = async (spellId, id) => {
  const resp = await api.put(`/sorting/spells/${spellId}/profile/${id}`);
  return resp.data;
}