import './Profile.css'
import { Link } from 'react-router-dom';

export default function Profile(props) {
  const { currentStudent, handleStudentDelete } = props;

  return (
    <div className='profile-container'>
      <div className='profile-card'>
        <div className='profile-info'>
          <div>
            <div>
              <img className='profile-pic' src={currentStudent?.img_url} />
            </div>
            <div>
              <label>
                Student Photo:
                <input className='profile-input' type='text' src={currentStudent?.img_url} />
              </label>
            </div>
            <div>
              <label>
                Name:
                <input className='profile-input' type='text' value={currentStudent?.user.username} />
              </label>
            </div>
            <div>
              <label>
                House:
                <input className='profile-input' type='text' value={currentStudent?.house.name} />
              </label>
            </div>
            <div>
              <label>
                Spell:
                <input type='text' value={currentStudent?.spell.name} />
              </label>
            </div>
            <div>
              <label>
                Patronus:
                <input className='profile-input' type='text' value={currentStudent?.patronus} />
              </label>
            </div>
            <div>
              <label>
                Pet:
                <input className='profile-input' type='text' value={currentStudent?.pet} />
              </label>
            </div>
            <Link to={`/profile/${currentStudent?.id}/edit`}><button>Edit</button></Link>
            <button onClick={handleStudentDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div >
  )
}
