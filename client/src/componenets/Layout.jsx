import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className='layout'>
      <Navbar currentUser={props.currentUser} handleSignOut={props.handleSignOut} />
      {props.children}
      <Footer />
    </div>
  )
}
