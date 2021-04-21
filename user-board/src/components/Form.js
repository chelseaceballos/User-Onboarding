import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        LambdaSchoolUnit2
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
//Set InitialValues
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};



export default function SignUp() {
  const classes = useStyles();
  //set state of values
  const [values, setValues] = useState(initialValues);
  //onchange and submit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

/// Inputs
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Join Our Team Today!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type='text'
                label="First Name"
                name="firstName"
                value= {values.firstName}
                onChange={handleChange}
                id="firstName"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='text'
                label="Last Name"
                name="lastName"
                value= {values.lastName}
                onChange={handleChange}
                id="lastName"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type='email'
                label="Email"
                name="email"
                value= {values.email}
                onChange={handleChange}
                id="email"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                type='password'
                label="Password"
                name="password"
                value= {values.password}
                onChange={handleChange}
                id="password"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the terms of service."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}