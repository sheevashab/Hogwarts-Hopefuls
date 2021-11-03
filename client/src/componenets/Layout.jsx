import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className='layout'>
      <Navbar currentUser={props.currentUser} handleSignOut={props.handleSignOut} />
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
