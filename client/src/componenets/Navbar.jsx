import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ currentUser, handleSignOut }) {
  const authenticatedOptions = (
    <>
      <NavLink className='navbar-link' id='profile-link' to='/profile'>profile</NavLink>
      <Link className='navbar-link' onClick={handleSignOut} to='/'>sign out</Link>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className='navbar-link' id='sign-in-link' to='/sign-in'>sign in</NavLink>
    </>
  )
  return (
    <nav>
      <div className='navbar'>
        <NavLink className='navbar-logo' to='/home'>Hogwarts<br />Hopefuls</NavLink>
        <div className='navbar-links-container'>
          <NavLink className="navbar-link" to='/alumni'>alumni</NavLink>
          {currentUser ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}