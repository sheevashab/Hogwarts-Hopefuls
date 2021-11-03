import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <form
      className='sign-in-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}>
      <h3>Welcome Back</h3>
      <h4>To The Wonderful World Of Witchcraft And Wizardry</h4>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>
        <Link to='/'>
          Sign In</Link></button>
      <h5>Haven't received your Hogwarts Letter yet?</h5>
      <Link to='/sign-up'>Sign Up</Link>
    </form>
  )
}
