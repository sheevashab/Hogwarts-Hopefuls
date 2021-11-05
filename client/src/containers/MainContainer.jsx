import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllHouses } from '../services/houses';
import { getAllSpells } from '../services/spells';
import { getAllStudents, getOneStudent, postStudent, putStudent, deleteStudent } from '../services/students';
// import { addHouseToStudent, addSpellToStudent } from '../services/students';
import { getAllUsers } from '../services/users';

import Home from '../screens/Home';
import Alumni from '../screens/Alumni';
import Letter from '../screens/Letter';
import LetterPartTwo from '../screens/LetterPartTwo';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';

export default function MainContainer() {
  const [students, setStudents] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getAllUsers();
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = await getAllStudents();
      setStudents(studentList);
    };
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchHouses = async () => {
      const houseList = await getAllHouses();
      setHouses(houseList);
    };
    fetchHouses();
  }, []);

  useEffect(() => {
    const fetchSpells = async () => {
      const spellList = await getAllSpells();
      setSpells(spellList);
    };
    fetchSpells();
  }, []);


  const handleStudentCreate = async (formData) => {
    const newStudent = await postStudent(formData);
    setCurrentUser((prevState) => [...prevState, newStudent]);
    history.push('/letter');
  };

  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/alumni'>
        <Alumni students={students} spells={spells} houses={houses} users={users} />
      </Route>
      <Route exact path='/letter'>
        <Letter currentUser={setCurrentUser} handleStudentCreate={handleStudentCreate} />
      </Route>
      <Route exact path='/sorting'>
        <LetterPartTwo />
      </Route>
      <Route exact path='/profile/:id/edit'>
        <ProfileEdit />
        <Route exact path='/profile/:id'>
          <Profile />
        </Route>
      </Route>
    </Switch>
  )
}
