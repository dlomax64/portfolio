import logo from '../../Assets/logo.svg';
import '../../Styles/Home/Home.css';

const Home = () => {
  return (
    <>
      <div className="Home">
        <p> 
          This is the home page.
        </p>
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          This website is currently being built. Please check back later!
        </p>
      </div>
    </>
  )
}

export default Home;
