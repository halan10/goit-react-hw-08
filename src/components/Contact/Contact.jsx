import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { deleteContact } from '../../redux/contacs/operations';
import CustomButton from '../CustomButton/CustomButton';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import Avatar from '@mui/joy/Avatar';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toast.success('Contact successfully deleted.');

    dispatch(deleteContact(contact.id));
  };
  return (
    <Paper className={css.card}>
      <Grid container>
        <Hidden only="sm">
          <Grid className={css.boxicon}>
            <Avatar
              alt={contact.name}
              src="/broken-image.jpg"
              className={css.icons}
            />
          </Grid>
        </Hidden>

        <Grid container justifyContent="flex-end">
          <Typography variant="h4"> {contact.name}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justifyContent="flex-end">
          <Typography variant="h6" align="left">
            {contact.number}
          </Typography>
        </Grid>
      </Grid>

      <Divider style={{ color: '#000' }} />

      <Grid container justify="flex-start">
        <CustomButton name={'Delete'} handleClick={handleDelete} />
      </Grid>
    </Paper>
  );
}
