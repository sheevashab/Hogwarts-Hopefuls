import './Home.css'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='home-background'>
        <div className='home-container'>
          <div className='home-intro'>Welcome to the Wonderful World of Witchcraft and Wizardry!</div>
          <img className='home-deathly-hallows' src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635973772/deathlyhallows_fd4ur1.png' alt='deathly hallows symbol' />
          <div className='home-text'>Hogwarts Hopefuls provides  magical beings like yourself a platform to share your supernatural persona</div>
          <img className='home-deathly-hallows' src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635973772/deathlyhallows_fd4ur1.png' alt='deathly hallows symbol' />
          <div className='home-text'><Link className='home-sign-up-link' to='/sign-up'>Sign Up</Link><br /> To Get Sorted Into Your Hogwarts House And To Reveal Your Specialty Spell</div>
        </div>
      </div>
    </>
  )
}
