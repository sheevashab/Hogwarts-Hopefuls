import './LetterPartTwo.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LetterPartTwo(props) {
  const [showSpell, setShowSpell] = useState(false);
  const { handleStudentCreate, currentStudent } = props;

  return (
    <div className='sorting-letter-container'>
      If you could be a flavor of Bertie Bott's Every Flavor Beans, which would you be?
      <button onClick={() => handleStudentCreate({ house_id: 4 })}>Earthworm</button>
      <button onClick={() => handleStudentCreate({ house_id: 2 })}>Earwax</button>
      <button onClick={() => handleStudentCreate({ house_id: 1 })}>Grass</button>
      <button onClick={() => handleStudentCreate({ house_id: 3 })}>Rotten Egg</button>
      {currentStudent && <div>
        <h2>{currentStudent.house.name}</h2>
        <p>And before we let you leave for Diagon Ally, we have one more question to ask our incoming students. Click your wand on the magical button below to connect your wand’s core to the school’s database.</p>
        <button onClick={() => setShowSpell(true)}>WandPicture</button>
        {showSpell && <div>
          <p>Brilliant! Your specialty spell has been revealed as...</p>
          <h2>{currentStudent.spell.name}</h2>
          <Link to={`/profile/${currentStudent.id}/edit`}><button>Arrow</button></Link>
        </div>}
      </div>}
    </div>
  )
}
