import { Modal, Frame } from '@react95/core';
import { Joy102 } from '@react95/icons/esm/react/Joy102';
import Minesweeper95 from 'pb-minesweeper';

const Minesweeper = (props) => (
  <Modal id='window'
    icon={<Joy102 />}
    title='Minesweeper'
    closeModal={props.closeMinesweeper}
    width='auto'
    height='auto'
    menu={[
     { name: 'File', list:[], },
     { name: 'Edit', list:[], },
    ]}
  >
    <Frame height='100%' boxShadow='in' bg='white'>
      <Minesweeper95 />
    </Frame>
  </Modal>
)

export default Minesweeper;
