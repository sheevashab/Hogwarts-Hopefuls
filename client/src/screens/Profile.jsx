import './Profile.css'
import { Link } from 'react-router-dom';

export default function Profile(props) {
  const { currentStudent, handleStudentDelete } = props;

  return (
    <div className='profile-container'>
      <div className='profile-card'>
        <div className='profile-info'>
          <div className='profile-pic-container'>
            <img className='profile-pic' src={currentStudent?.img_url} />
          </div>
          <div className='profile-inputs'>
            <textarea className='profile-input' type='text' value={currentStudent?.user.username} />
            <textarea className='profile-input' type='text' value={currentStudent?.house.name} />
            <textarea className='profile-input' type='text' value={currentStudent?.spell.name} />
            <textarea className='profile-input' type='text' value={currentStudent?.patronus} />
            <textarea className='profile-input' type='text' value={currentStudent?.pet} />
          </div>
        </div>
      </div>
      <Link className='profile-button-container'
        to={`/profile/${currentStudent?.id}/edit`}>
        <button className='profile-button'>
          Obliviate<br />(edit)
        </button>
      </Link>
      <button
        className='profile-button'
        onClick={handleStudentDelete}>
        Avada Kedabra<br />(delete)
      </button>
    </div >
  )
}
