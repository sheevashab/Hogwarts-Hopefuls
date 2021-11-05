import './Letter.css'

import { Link } from 'react-router-dom';

export default function Letter(props) {
  const { currentUser } = props;

  return (
    <div className='acceptance-letter-container'>
      <div className='acceptance-letter'>
        <p>Dear {currentUser?.username},
          <br />
          <br />
          We are pleased to inform you that you have been accepted to Hogwarts School of Witchcraft and Wizardry.
          We very much look forward to receiving you as part of the new generation of Hogwarts.<br />
          Yours Sincerely,
          <br />
          <br />
          Minerva McGonagall
          <br />
          <br />
          As with most years at this school, something is amiss. As such, we will be sorting you before your arrival on the Hogwarts Express. Please click your wand on the magical link below to connect your body and spirit to the Sorting Hat.
        </p>
      </div>
      <div className='acceptance-letter-button-container'>
        <Link to='/sorting'>
          <button className='acceptance-letter-button' >
            <img className='acceptance-letter-button'
              src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636134784/SortingHatNoWhite_zkuv5v.png' />
          </button>
        </Link>
      </div>
    </div>
  )
}
