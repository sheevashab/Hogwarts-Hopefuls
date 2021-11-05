import { Link } from 'react-router-dom';

export default function Profile(props) {
  const { currentStudent, handleStudentDelete } = props;

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <label>
          Name:
          <input type='text' value={currentStudent?.user.username} />
        </label>
        <label>
          Pet:
          <input type='text' value={currentStudent?.pet} />
        </label>
        <label>
          Patronus:
          <input type='text' value={currentStudent?.patronus} />
        </label>
        <Link to={`/profile/${currentStudent?.id}/edit`}><button>Edit</button></Link>
        <button onClick={handleStudentDelete}>Delete</button>
      </div>
    </div>
  )
}
