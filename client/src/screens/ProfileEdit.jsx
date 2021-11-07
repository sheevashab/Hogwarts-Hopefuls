import './Profile.css'
import { useState, useEffect } from 'react';

export default function ProfileEdit(props) {
  const [formData, setFormData] = useState({
    img_url: '',
    patronus: '',
    pet: '',
  });

  const { img_url, patronus, pet } = formData;
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
    <div className='profile-container'>
      <div className='profile-card'>
        <div className='profile-info'>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleStudentUpdate(formData)
          }}>

            <div className='profile-pic-container'>
              <img className='profile-pic' src={currentStudent?.img_url} />
            </div>


            <div className='profile-inputs'>
              <div>
                <label>
                  Student Photo (URL)
                  <input className='profile-input' type='text' name='img_url' value={img_url} onChange={handleChange} />
                </label>
              </div>

              <div>
                <label>
                  Name
                  <textarea className='profile-input' type='text' value={currentStudent?.user.username} />
                </label>
              </div>

              <div>
                <label>
                  House
                  <textarea className='profile-input' type='text' value={currentStudent?.house.name} />
                </label>
              </div>

              <div>
                <label>
                  Spell
                  <textarea className='profile-input' type='text' value={currentStudent?.spell.name} />
                </label>
              </div>

              <div>
                <label>
                  Patronus
                  <input className='profile-input' type='text' name='patronus' value={patronus} onChange={handleChange} />
                </label>
              </div>

              <div>
                <label>
                  Pet
                  <input className='profile-input' type='text' name='pet' value={pet} onChange={handleChange} />
                </label>
              </div>
            </div>
            <button className='profile-button'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}
