import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <NavLink className='footer-logo' to='https://github.com/sheevashab/Hogwarts-Hopefuls'>Hogwarts<br />Hopefuls</NavLink>
        <NavLink className='github-logo' to='https://github.com/sheevashab/Hogwarts-Hopefuls'><img className='github-logo' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG24.png&f=1&nofb=1' alt='github logo' /></NavLink>
      </div>
    </footer>
  )
}
