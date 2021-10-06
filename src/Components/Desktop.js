import Taskbar from './Taskbar';
import FirstName from '../Assets/FirstName.js';
import LastName from '../Assets/LastName.js';
import Title from '../Assets/Title.js';
import '../Styles/Desktop.css';

const Desktop = (props) => {
    console.log("Desktop rendered!");
    return (
      <div className="Desktop">
        <FirstName id="name" className="first" stroke="#fff"/>
        <LastName className="last" id="name" stroke="#fff"/>
        <Title id="name" className="title" stroke="#fff"/>
        <Taskbar changeTheme={props.changeTheme}/>
      </div>
    )
  }

export default Desktop;
