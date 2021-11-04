import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className='layout'>
      {/* <div className='layout-navbar'> */}
      <Navbar currentUser={props.currentUser} handleSignOut={props.handleSignOut} />
      {/* </div> */}
      {/* <div className='layout-children'> */}
      {props.children}
      {/* </div>
      <div className='layout-footer'> */}
      <Footer />
      {/* </div> */}
    </div>
  )
}
