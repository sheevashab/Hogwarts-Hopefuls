import { useState } from 'react';

export default function Profile(props) {
  const [formData, setFormData] = useState({
    pet: '',
    patronus: '',
    img_url: '',
    user: '',
    house: '',
    spell: '',
  });

  const { pet, patronus, img_url, user, house, spell } = formData;
  const { handleStudentCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleStudentCreate(formData);
      }}>
        <label>
          Name:
          <input type='text' value={user} onChange={handleChange} />
        </label>
        <label>
          Pet:
          <input type='text' value={pet} onChange={handleChange} />
        </label>
        <label>
          Patronus:
          <input type='text' value={patronus} onChange={handleChange} />
        </label>
        <button>Edit</button>
        <button>Delete</button>
      </form>
    </div>
  )
}
