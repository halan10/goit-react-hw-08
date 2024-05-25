import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import { addContact } from '../../redux/contacs/operations';
import { useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import Paper from '@mui/material/Paper';

import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be longer than 3 characters!')
    .max(50, 'Too Long!')
    .required('Name is required field'),
  number: Yup.string()
    .min(3, 'Number phone has to be longer than 3 characters!')
    .max(50, 'Too Long!')
    .required('Number phone is required field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, e) => {
    dispatch(addContact(values));
    toast.success('Great job! Contact saved.');
    e.resetForm();
  };
  return (
    <Paper className={css.paper}>
      <h3>Add new contact</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name">
              {fieldProps => {
                const { field } = fieldProps;
                return (
                  <TextField
                    autoComplete="off"
                    {...field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                      style: {
                        color: 'white',
                        height: 34,
                        paddingLeft: 12,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontSize: 14,
                      },

                      disableUnderline: true,
                    }}
                    className={css.inputs}
                    id={nameId}
                    variant="standard"
                    name="name"
                    type="name"
                  />
                );
              }}
            </Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
          <label className={css.label}>
            Number phone
            <Field type="phone" name="number">
              {fieldProps => {
                const { field } = fieldProps;
                return (
                  <TextField
                    autoComplete="off"
                    {...field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneRoundedIcon />
                        </InputAdornment>
                      ),
                      style: {
                        color: 'white',
                        height: 34,
                        paddingLeft: 12,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontSize: 14,
                      },

                      disableUnderline: true,
                    }}
                    className={css.inputs}
                    id={numberId}
                    variant="standard"
                    name="number"
                    type="phone"
                  />
                );
              }}
            </Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </label>
          <CustomButton type={'submit'} name={'Add contact'} />
        </Form>
      </Formik>
    </Paper>
  );
}
