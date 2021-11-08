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
              <img
                className='profile-pic'
                alt='user profile'
                src={currentStudent?.img_url} />
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
                  <div className='profile-input' readOnly>{currentStudent?.user.username}</div>
                </label>
              </div>

              <div>
                <label>
                  House
                  <div className='profile-input' readOnly>{currentStudent?.house.name} </div>
                </label>
              </div>

              <div>
                <label>
                  Spell
                  <div className='profile-input' readOnly>{currentStudent?.spell.name}</div>
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
