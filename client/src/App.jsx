import './App.css';
import Layout from './componenets/Layout';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Alumni from './screens/Alumni';
import Letter from './screens/Letter';
import LetterPartTwo from './screens/LetterPartTwo';
import MainContainer from './containers/MainContainer';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import { signInUser, signUpUser, verifyUser, removeToken } from './services/authorization';

import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await signInUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleSignOut={handleSignOut}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/alumni'>
            <Alumni />
          </Route>
          <Route exact path='/letter'>
            <Letter />
          </Route>
          <Route exact path='/sorting'>
            <LetterPartTwo />
          </Route>
          <Route exact path='/alumni/:id'>
            <Profile />
          </Route>
          <Route exact path='/alumni/:id/edit'>
            <ProfileEdit />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
