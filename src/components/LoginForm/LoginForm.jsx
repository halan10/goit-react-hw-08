import { useState } from 'react';
import { useId } from 'react';

import { Formik, Form, Field } from 'formik';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import CustomButton from '../CustomButton/CustomButton';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        console.log(reponse);
        toast.success('Signed in successfully!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Username or password are wrong!');
      });
    actions.resetForm();
  };

  return (
    <>
      <Paper className={css.paper}>
        <h1>Log In</h1>
        <Avatar className={css.avatar}>
          <AccountCircleIcon className={css.icon} />
        </Avatar>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form} autoComplete="off">
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
            </label>
            <CustomButton type={'submit'} name={'Log In'} />
          </Form>
        </Formik>
      </Paper>
    </>
  );
}
