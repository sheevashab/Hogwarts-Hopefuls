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
        <label className='sign-in-label'>
          username
          <div>
            <input
              className='sign-in-input'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <label className='sign-in-label'>
          password
          <div>
            <input
              className='sign-in-input'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <button className='sign-in-button'>Sign In</button>
        <h5>Haven't received your Hogwarts letter yet?</h5>
        <Link to='/sign-up'>Sign Up</Link>
      </form>
    </div>
  )
}
