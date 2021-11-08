import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-section-one'>
          <img className='footer-stars'
            alt='three stars'
            src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636052174/Stars_b8wizr.png' />
        </div>
        <div className='footer-section-two'>
          <NavLink className='footer-logo' to='https://github.com/sheevashab/Hogwarts-Hopefuls'>Hogwarts<br />Hopefuls</NavLink>
          <NavLink className='github-logo' to='https://github.com/sheevashab/Hogwarts-Hopefuls'><img className='github-logo' src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636051727/GitHubLogo_pjwoed.png' alt='github logo' /></NavLink>
        </div>
        <div className='footer-section-three'>
          <img className='footer-stars'
            alt='three stars'
            src='https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636052174/Stars_b8wizr.png' />
        </div>
      </div>
    </footer>
  )
}
