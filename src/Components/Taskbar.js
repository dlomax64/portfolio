import { TaskBar, List } from '@react95/core';

import { Inetcpl1315 } from '@react95/icons/esm/react/Inetcpl1315';
import { FlyingWindows100 } from '@react95/icons/esm/react/FlyingWindows100';
import { Shell322 } from '@react95/icons/esm/react/Shell322';
import { User } from '@react95/icons/esm/react/User';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';
import { Sendmail2001 } from '@react95/icons/esm/react/Sendmail2001';

const Taskbar = (props) => {

  const onClick = (e, link) => {
    e.preventDefault();
    var win = window.open(link, '_blank');
    win.focus();
  }

  return( 
		<TaskBar 
			list={
				<List>
					<List.Item 
            as='a'
            href='mailto:dylan@dlomax.net'
            icon={<Sendmail2001 variant="32x32_4" />}
            target='_blank'
          >
					    Contact 
					</List.Item>
					<List.Item icon={<Shell322 variant="32x32_4" />} onClick={() => props.openWindow('resume')}>
					  Resume 
					</List.Item>
					<List.Item icon={<User variant="32x32_4" />} onClick={() => props.openWindow('about')}>
					  About 
					</List.Item>
					<List.Item icon={<Inetcpl1315 />} onClick={(e) => onClick(e, 'https://github.com/dlomax64')}>
						Github
					</List.Item>
					<List.Item icon={<FlyingWindows100 variant="32x32_4" />} onClick={(e) => onClick(e, 'https://linkedin.com/in/dlomax')}>
					  Linkedin
					</List.Item>
          <List.Divider />
					<List.Item icon={<Pbrush1 variant="32x32_4" />} onClick={() => props.openWindow('theme')}>
					  Themes 
					</List.Item>
				</List>
			}
		/>
	)
}

export default Taskbar;
