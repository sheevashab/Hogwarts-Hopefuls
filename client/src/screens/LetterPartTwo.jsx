import './LetterPartTwo.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LetterPartTwo(props) {
  const [showSpell, setShowSpell] = useState(false);
  const { handleStudentCreate, currentStudent } = props;

  return (
    <div className='sorting-letter-container'>
      <div className='sorting-question'>
        If you could be a flavor of Bertie Bott's Every Flavor Beans,<br />which would you be?<br />
        <button className='sorting-question-button' onClick={() => handleStudentCreate({ house_id: 4 })}>Earthworm</button>
        <button className='sorting-question-button' onClick={() => handleStudentCreate({ house_id: 2 })}>Earwax</button>
        <button className='sorting-question-button' onClick={() => handleStudentCreate({ house_id: 1 })}>Grass</button>
        <button className='sorting-question-button' onClick={() => handleStudentCreate({ house_id: 3 })}>Rotten Egg</button>
      </div>
      {currentStudent && <div>
        <h2 className='sorting-question-reveal'>{currentStudent.house.name}</h2>
        <p className='sorting-spell-intro'>And before we let you leave for Diagon Ally,<br />we have one more question to ask our incoming students.<br />Click your wand on the magical button below to connect your wand’s core to the school’s database.</p>
        <button className='sorting-wand-button' onClick={() => setShowSpell(true)}>
          <img className='sorting-wand-button'
            alt='Elder Wand'
            src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636300185/wand_vkkfkj.png' />
        </button>
        {showSpell && <div>
          <p className='sorting-spell-intro'>Brilliant! Your specialty spell has been revealed as...</p>
          <h2 className='sorting-question-reveal'>{currentStudent.spell.name}</h2>
          <Link className='sorting-continue-button' to={`/profile/${currentStudent.id}/edit`}><button>Continue</button></Link>
        </div>}
      </div>}
    </div>
  )
}
