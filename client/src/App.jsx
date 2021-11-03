import './App.css';
import Layout from './componenets/Layout';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import MainContainer from './containers/MainContainer'
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
  };
  return (
    <div className="App">
      <Layout currentUser={currentUser} handleSignOut={handleSignOut}>
        {currentUser || 'no user'}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sign-in'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/sign-up'>
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
