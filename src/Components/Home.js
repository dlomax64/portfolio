import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Home.css';
import Particles from './Particles';

const Home = () => {
  return (
    <div className="Home">
      <div id="container">
      <FirstName id="name" className="first" stroke="#fff"/>
      <LastName className="last" id="name" stroke="#fff"/>
      </div>
      <div id="title_container">
      <Title id="title" stroke="#fff"/>
      </div>
    </div>
  )
}

export default Home;
