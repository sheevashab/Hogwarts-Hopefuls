import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllHouses } from '../services/houses';
import { getAllSpells } from '../services/spells';
import { getAllStudents, getOneStudent, postStudent, putStudent, deleteStudent, getUsersStudent } from '../services/students';
// import { addHouseToStudent, addSpellToStudent } from '../services/students';
import { getAllUsers } from '../services/users';

import Home from '../screens/Home';
import Alumni from '../screens/Alumni';
import Letter from '../screens/Letter';
import LetterPartTwo from '../screens/LetterPartTwo';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';

export default function MainContainer(props) {
  const [students, setStudents] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null)
  const history = useHistory();

  const { currentUser } = props;

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

  useEffect(() => {
    const fetchCurrentStudent = async () => {
      const studentData = await getUsersStudent();
      setCurrentStudent(studentData);
    };
    if (currentUser) { fetchCurrentStudent(); }
  }, [currentUser])


  const handleStudentCreate = async (studentData) => {
    const newStudent = await postStudent(studentData);
    setCurrentStudent(newStudent);
  };

  const handleStudentUpdate = async (studentData) => {
    const newStudent = await putStudent(studentData);
    setCurrentStudent(newStudent);
    history.push(`/profile/${newStudent.id}`)
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
        <Letter currentUser={currentUser} />
      </Route>
      <Route exact path='/sorting'>
        <LetterPartTwo currentStudent={currentStudent} handleStudentCreate={handleStudentCreate} />
      </Route>
      <Route exact path='/profile/:id/edit'>
        <ProfileEdit currentStudent={currentStudent} handleStudentUpdate={handleStudentUpdate} />
        <Route exact path='/profile/:id'>
          <Profile currentStudent={currentStudent} />
        </Route>
      </Route>
    </Switch>
  )
}
