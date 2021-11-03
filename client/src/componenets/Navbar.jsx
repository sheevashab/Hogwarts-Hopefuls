import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ currentUser, handleSignOut }) {
  const authenticatedOptions = (
    <>
      <NavLink className="navbar-link" id="profile-link" to="/student-profile">profile</NavLink>
      <Link className="navbar-link" onClick={handleSignOut} to='/'>sign out</Link>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="navbar-link" id="sign-in-link" to="/sign-in">sign in</NavLink>
    </>
  )
  return (
    <nav>
      <div className="nav">
        <NavLink className='navbar-logo' to='/'>Hogwarts Hopefuls</NavLink>
        <div className='navbar-links-container'>
          <NavLink to='/alumni'>alumni</NavLink>
          {currentUser ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}