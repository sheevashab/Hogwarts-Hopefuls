import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div>
      <Navbar user={props.user} />
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
