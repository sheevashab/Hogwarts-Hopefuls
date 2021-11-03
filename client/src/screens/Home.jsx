import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>Welcome to the Wonderful World of Witchcraft and Wizardry!</div>
      <img src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635973772/deathlyhallows_fd4ur1.png' />
      <div>Hogwarts Hopefuls provides  magical beings like yourself a platform to share your supernatural persona</div>
      <img src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1635973772/deathlyhallows_fd4ur1.png' />
      <div>Sign Up To Get Sorted Into Your Hogwarts House And To Reveal Your Specialty Spell</div>
      <button>
        <Link to='/sign-up'>Sorting Hat Picture</Link>
      </button>
    </>
  )
}
