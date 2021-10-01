import '../Styles/Contact.css';
import { 
  Card,
  CardHeader
} from '@mui/material';

const Contact = () => {
  return (
    <div className='Contact'>
      <div id='contact_page' >
        <Card variant='outlined' sx={{ minWidth: 500, minHeight: 500 }}>
          <CardHeader 
            title='Get In Touch'
            subheader="This doesn't work yet"
          />
        </Card>
      </div>
    </div>
  )
}

export default Contact;
