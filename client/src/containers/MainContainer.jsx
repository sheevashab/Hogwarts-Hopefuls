import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getOneHouse } from '../services/houses';
import { getOneSpell } from '../services/spells';
import { getAllStudents, getOneStudent, postStudent, putStudent, deleteStudent, addHouseToStudent, addSpellToStudent } from '../services/students';

import Home from '../screens/Home';
import Alumni from '../screens/Alumni';
import Letter from '../screens/Letter';
import LetterPartTwo from '../screens/LetterPartTwo';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';

export default function MainContainer() {
  const [students, setStudents] = useState([]);
  const [house, setHouse] = useState([]);
  const [spell, setSpell] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = await getAllStudents();
      setStudents(studentList);
    };
    fetchStudents();
  }, []);

  const handleStudentCreate = async (formData) => {
    const newStudent = await postStudent(formData);
    setStudents((prevState) => [...prevState, newStudent]);
    history.push('/profile');
  };

  return (
    <Switch>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/alumni'>
        <Alumni />
      </Route>
      <Route exact path='/letter'>
        <Letter />
      </Route>
      <Route exact path='/sorting'>
        <LetterPartTwo handleStudentCreate={handleStudentCreate} />
      </Route>
      <Route exact path='/profile/:id'>
        <Profile />
      </Route>
      <Route exact path='/profile/:id/edit'>
        <ProfileEdit />
      </Route>
    </Switch>
  )
}
