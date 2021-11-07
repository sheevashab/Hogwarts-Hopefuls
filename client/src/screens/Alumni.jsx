import './Alumni.css';
import './Profile.css';

export default function Alumni(props) {
  const { students } = props;
  return (
    <>
      <div className='profile-container'>
        <h3 className='alumni-header'>Your Fellow Students</h3>
        <div className='alumni-container'>
          {students.map((student) => (
            <div key={student.id}>
              <div className='profile-card'>
                <div className='profile-info'>
                  <div className='profile-pic-container'>
                    <img className='profile-pic' src={student.img_url} />
                  </div>
                  <div className='profile-inputs'>
                    <p className='profile-input'>{student.user.username}</p>
                    <p className='profile-input'>{student.house.name}</p>
                    <p className='profile-input'>{student.spell.name}</p>
                    <p className='profile-input'>{student.patronus}</p>
                    <p className='profile-input'>{student.pet}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
