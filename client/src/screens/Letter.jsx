import { useState } from 'react';
import { Link } from 'react-router-dom';

//create one student that belongs to user
//post request createNewStudent
//only need to access student's name (via user's name)

export default function Letter(props) {
  const { currentUser } = props;

  return (
    <>
      <p>
        Dear {currentUser?.username},<br />
        We are pleased to inform you that you have been accepted to Hogwarts School of Witchcraft and Wizardry.
        We very much look forward to receiving you as part of the new generation of Hogwarts.<br />
        Yours Sincerely,<br />
        Minerva McGonagall<br />
        As with most years at this school, something is amiss. As such, we will be sorting you before your arrival on the Hogwarts Express. Please click your wand on the magical link below to connect your body and spirit to the Sorting Hat.
      </p>
      <Link to='/sorting'><button>Sorting Hat Picture</button></Link>
    </>
  )
}
