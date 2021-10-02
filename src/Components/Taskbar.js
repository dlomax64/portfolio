import { Component } from 'react';
import { TaskBar, List } from '@react95/core';

import { Inetcpl1315 } from '@react95/icons/esm/react/Inetcpl1315';
import { FlyingWindows100 } from '@react95/icons/esm/react/FlyingWindows100';
import { Shell322 } from '@react95/icons/esm/react/Shell322';
import { User } from '@react95/icons/esm/react/User';

class Taskbar extends Component {
	constructor(props) {
    super(props);
		this.onClick = this.onClick.bind(this);
  }

  onClick(e, link) {
    e.preventDefault();
    var win = window.open(link, '_blank');
    win.focus();
  }

  render() {
    return( 
		<TaskBar 
			list={
				<List>
					<List.Item icon={<Inetcpl1315 />} onClick={(e) => this.onClick(e, 'https://github.com/dlomax64')}>
						Github
					</List.Item>
					<List.Item icon={<FlyingWindows100 variant="32x32_4" />} onClick={(e) => this.onClick(e, 'https://linkedin.com/in/dlomax')}>
					  Linkedin
					</List.Item>
					<List.Item icon={<Shell322 variant="32x32_4" />} onClick={(e) => this.onClick(e, 'https://www.dropbox.com/s/da87txed4n69c1r/lomax_dylan_CV.pdf?dl=0')}>
					  Resume 
					</List.Item>
					<List.Item icon={<User variant="32x32_4" />} onClick={() => this.props.openWindow('about')}>
					  About 
					</List.Item>
				</List>
			}
		/>
	  )
  }
}

export default Taskbar;
