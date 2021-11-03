import './Navbar.css';
import { NavLink } from 'react-router-dom';

const authenticatedOptions = (
  <>
    <NavLink className="navbar-link" id="profile-link" to="/student-profile">profile</NavLink>
    <NavLink className="navbar-link" id="sign-out-link" to="/sign-out">sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="navbar-link" id="sign-in-link" to="/sign-in">Sign In</NavLink>
  </>
)

export default function Navbar({ user }) {
  return (
    <nav>
      <div className="nav">
        <NavLink className='navbar-logo' to='/'>Hogwarts Hopefuls</NavLink>
        <div className='navbar-links-container'>
          <NavLink to='/alumni'>alumni</NavLink>
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}