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
    <div className='sign-in-background'>
      <div className='sign-in-container'>
        <form
          className='sign-in-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn(formData);
          }}>
          <h3 className='sign-in-intro'>Welcome Back</h3>
          <h4 className='sign-in-message'>To The<br />Wonderful World Of<br />Witchcraft And Wizardry</h4>
          <label className='sign-in-label'>
            User Name
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
            Password
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
          <button className='sign-in-button'>
            <img src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636300185/wand_vkkfkj.png'
              alt='wand'
              className='sign-in-wand' />
            Sign In
          </button>
          <h5 className='sign-in-to-sign-up'>
            Haven't received your Hogwarts letter yet?<br />
            <Link className='sign-in-to-sign-up' to='/sign-up'>Sign Up</Link></h5>
        </form>
      </div>
    </div>
  )
}
