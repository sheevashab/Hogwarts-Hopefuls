import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProfileEdit(props) {
  const [formData, setFormData] = useState({
    img_url: '',
    patronus: '',
    pet: '',
  });

  const { img_url, patronus, pet } = formData;
  const { id } = useParams();
  const { handleStudentUpdate, currentStudent } = props;

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        pet: currentStudent.pet
      })
    };
    if (currentStudent) {
      prefillFormData();
    }
  }, [currentStudent])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Profile Edit</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleStudentUpdate(formData)
      }}>
        <label>
          Name:
          <input type='text' value={currentStudent?.user.username} />
        </label>
        <label>
          Pet:
          <input type='text' name='pet' value={pet} onChange={handleChange} />
        </label>
        <label>
          Patronus:
          <input type='text' name='patronus' value={patronus} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type='text' name='img_url' value={img_url} onChange={handleChange} />
        </label>
        <label>
          House:
          <input type='text' value={currentStudent?.house.name} />
        </label>
        <label>
          Spell:
          <input type='text' value={currentStudent?.spell.name} />
        </label>
        <button>Save</button>
      </form>
    </div>
  )
}
