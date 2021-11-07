import Taskbar from './Taskbar';
import '../Styles/Desktop.css';

const Desktop = (props) => {
    return (
      <div className="Desktop">
        <Taskbar changeTheme={props.changeTheme}/>
      </div>
    )
  }

export default Desktop;
