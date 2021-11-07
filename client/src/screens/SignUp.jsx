import { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleSignUp } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='sign-in-background'>
      <div className='sign-in-container'>
        <form
          className='sign-in-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp(formData);
          }}
        >
          <h3 className='sign-in-intro'>Create Account</h3>
          <h4 className='sign-in-message'>To Join The Wonderful World Of Witchcraft And Wizardry</h4>
          <label className='sign-in-label'>
            User Name
            <input
              className='sign-in-input'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className='sign-in-label'>
            E-mail
            <input
              className='sign-in-input'
              type='text'
              name='email'
              value={email}
              onChange={handleChange} />
          </label>
          <br />
          <label className='sign-in-label'>
            Password
            <input
              className='sign-in-input'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />

          <button className='sign-in-button'>
            <img src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636134784/SortingHatNoWhite_zkuv5v.png'
              alt='sorting hat'
              className='sign-in-button-image' />
            Sign Up
          </button>
          <h5 className='sign-in-to-sign-up'>Already received your Hogwarts letter?<br />
            <Link to='/sign-up'>Sign In</Link></h5>
        </form>
      </div>
    </div >
  );
}