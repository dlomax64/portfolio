import logo from '../../Assets/logo.svg';
import '../../Styles/Contact/Contact.css';

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <p> 
          This is the contact page.
        </p>
        <img src={logo} className="Contact-logo" alt="logo" />
        <p>
          This website is currently being built. Please check back later!
        </p>
      </div>
    </>
  )
}

export default Contact;
