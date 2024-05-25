import { useState } from 'react';
import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as Yup from 'yup';
import CustomButton from '../CustomButton/CustomButton';

import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be longer than 3 characters!')
    .max(50, 'Too Long!')
    .required('Name is required field'),
  email: Yup.string().email(),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passId = useId();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(reponse => {
        console.log(reponse);
        toast.success('Registration successful! Welcome to our website!');
      })
      .catch(error => {
        console.log(error);
        toast.error(
          'Unfortunately, the registration was unsuccessful. Please check your details and try again.'
        );
      });

    actions.resetForm();
  };

  return (
    <Paper className={css.paper}>
      <h1>Create Account</h1>
      <Avatar className={css.avatar}>
        <AccountCircleIcon className={css.icon} />
      </Avatar>
      <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Your Name
            <Field type="text" name="name">
              {fieldProps => {
                const { field } = fieldProps;
                return (
                  <TextField
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
            Email
            <Field type="email" name="email">
              {fieldProps => {
                const { field } = fieldProps;
                return (
                  <TextField
                    {...field}
                    InputProps={{
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
                    id={emailId}
                    variant="standard"
                    name="email"
                    type="email"
                  />
                );
              }}
            </Field>
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password">
              {fieldProps => {
                const { field } = fieldProps;
                return (
                  <FilledInput
                    {...field}
                    inputProps={{
                      style: {
                        paddingRight: 4,
                        paddingBottom: 0,
                        paddingTop: 0,
                      },
                    }}
                    name="password"
                    disableUnderline
                    className={css.inputs}
                    id={passId}
                    type={showPassword ? 'text' : 'password'}
                    variant="standard"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                );
              }}
            </Field>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
          <CustomButton type={'submit'} name={'Sign Up'} />
        </Form>
      </Formik>
    </Paper>
  );
}
