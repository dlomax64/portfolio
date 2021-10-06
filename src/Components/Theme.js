import { Modal, Fieldset, Dropdown } from '@react95/core';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';

import themeOptions from '../Assets/themeOptions';
import '../Styles/Theme.css';

const Theme = (props) => (
  <Modal id='window'
    icon={<Pbrush1 />}
    title='Theme'
    closeModal={props.closeTheme}
    width='auto'
    height='auto'
    buttons={[
      { value: 'OK', onClick: props.closeTheme}
    ]}
  >
    <Fieldset legend='Pick a theme' style={{ marginBottom: '1.6em', width: 205, color: 'black' }}>
      <Dropdown
        style={{ width: 200 }}
        options={themeOptions}
        onChange={(e) => props.changeTheme(e)}
      />
    </Fieldset>
  </Modal>
)

export default Theme;
