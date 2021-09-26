import logo from '../Assets/logo.svg';
import '../Styles/About.css';

const About = () => {
  return (
    <>
      <div className="About">
        <p> 
          This is the about page.
        </p>
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          This website is currently being built. Please check back later!
        </p>
      </div>
    </>
  )
}

export default About;
