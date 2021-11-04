import api from './apiConfig';

export const getAllStudents = async () => {
  const resp = await api.get('/alumni');
  return resp.data;
}

export const getOneStudent = async (id) => {
  const resp = await api.get(`/alumni/${id}`);
  return resp.data;
}

export const postStudent = async (studentData) => {
  const resp = await api.post('/alumni', { student: studentData });
  return resp.data;
}

export const putStudent = async (id, studentData) => {
  const resp = await api.put(`/alumni/${id}`, { student: studentData });
  return resp.data;
};

export const deleteStudent = async (id) => {
  const resp = await api.delete(`/alumni/${id}`);
  return resp;
};

export const addHouseToStudent = async (houseId, id) => {
  const resp = await api.put(`/sorting/house/${houseId}/alumni/${id}`);
  return resp.data;
}

export const addSpellToStudent = async (spellId, id) => {
  const resp = await api.put(`/sorting/spell/${spellId}/alumni/${id}`);
  return resp.data;
}