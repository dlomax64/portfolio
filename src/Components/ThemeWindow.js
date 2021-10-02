import { 
  Modal,
  Fieldset,
  Dropdown
} from '@react95/core';
import { Pbrush1 } from '@react95/icons/esm/react/Pbrush1';

const themeOptions = [
  '', 'win95', 'counterStrike',
  'bee', 'pamelaAnderson', 'azureOrange',
  'olive', 'vaporTeal', 'matrix',
  'vermillion', 'tooSexy', 'ninjaTurtles',
  'tokyoDark', 'molecule', 'travel',
  'theSixtiesUSA', 'candy', 'modernDark',
  'storm', 'millenium', 'spruce',
  'slate', 'rose', 'rainyDay',
  'plum', 'marine', 'maple',
  'lilac', 'blackAndWhite', 'highContrast',
  'eggplant', 'brick', 'water',
  'coldGray', 'lilacRoseDark', 'violetDark'
];

const ThemeWindow = (props) => {
  return (
    <Modal
      height='150'
      width='225'
      title='Change Theme'
      defaultPosition={{
        x:300,
        y:100,
      }}
      closeModal={() => props.closeWindow('theme')}
      icon={<Pbrush1 />}
      buttons={[
        { value: 'OK', onClick: () => props.closeWindow('theme') }
      ]}
    >
      <div style={{ padding: '2.5px' }} />
      <Fieldset legend='Pick a theme' style={{ marginBottom: '1.6em', color: 'black', height: 50 }}>
        <Dropdown 
          style={{ width: 200 }} 
          options={themeOptions} 
          onChange={(e) => props.changeTheme(e)} 
        />
      </Fieldset>
    </Modal>
  )
}

export default ThemeWindow;
