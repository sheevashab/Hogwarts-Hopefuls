import api from './apiConfig';

export const getAllStudents = async () => {
  const resp = await api.get('/students');
  return resp.data;
}

export const getOneStudent = async (id) => {
  const resp = await api.get(`/students/${id}`);
  return resp.data;
}

export const getUsersStudent = async () => {
  const resp = await api.get('/users/students');
  return resp.data;
}

export const postStudent = async (studentData) => {
  const resp = await api.post('/students', { student: studentData });
  return resp.data;
}

export const putStudent = async (studentData) => {
  const resp = await api.put(`/students/edit`, { student: studentData });
  return resp.data;
};

export const deleteStudent = async (id) => {
  const resp = await api.delete(`/students/${id}`);
  return resp;
};

export const addHouseToStudent = async (houseId, id) => {
  const resp = await api.put(`/sorting/houses/${houseId}/students/${id}`);
  return resp.data;
}

export const addSpellToStudent = async (spellId, id) => {
  const resp = await api.put(`/sorting/spells/${spellId}/students/${id}`);
  return resp.data;
}