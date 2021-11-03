import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}
    >
      <h3>Create Account</h3>
      <h4>To Join The Wonderful World Of Witchcraft And Wizardry</h4>
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
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
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
        <Link to='/'>Sign Up</Link></button>
      <h5>Already received your Hogwarts letter?</h5>
      <Link to='/sign-up'>Sign In</Link>
    </form>
  );
}