import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleSignIn } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  return (
    <div className='sign-in-container'>
      <form
        className='sign-in-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(formData);
        }}>
        <h3 className='sign-in-intro'>Welcome Back</h3>
        <h4 className='sign-in-message'>To The Wonderful World Of Witchcraft And Wizardry</h4>
        <label>
          username
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          password
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <Link to='/alumni'><button>Sign In</button></Link>
        <h5>Haven't received your Hogwarts letter yet?</h5>
        <Link to='/sign-up'><button>Sign Up</button></Link>
      </form>
    </div>
  )
}
