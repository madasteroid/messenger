import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AuthButton from "../../components/AuthButton/AuthButton";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
  FormHelperText, makeStyles,
} from "@material-ui/core";
import { register } from "../../store/utils/thunkCreators";


const useStyles = makeStyles( () => ({
  textField: {
    margin: "10px 0",
    fontFamily: "OpenSans",
  },
  header: {
    padding: "40px 0",
  },
  subtitle1:{
    paddingRight: "40px",
    color: "#B0B0B0",
    fontFamily: "OpenSans",
    fontWeight: "semiBold"
  },
  subtitle2:{
    fontFamily: "OpenSans",
    fontWeight: "bold",
    margin: "20px 0"

  },
  button:{
    fontFamily: "OpenSans",
    fontSize: "20px",
    fontWeight: "bold",
    width: "200px",
    height: "70px",
    margin: "40px 0"
  }
}));
const Register = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center">
      <Grid
          container
          justify="flex-end"
          alignItems="center"
          className={classes.header}
          component="header"
      >
        <Typography variant="subtitle1" className={classes.subtitle1}>Already have an account?</Typography>
        <AuthButton color="primary" onClick={() => history.push("/login")}>Login</AuthButton>
      </Grid>
      <Box width="65%">
        <Typography
            variant="h5"
            component="h1"
            className={classes.subtitle2}
        >
          Create an account.
        </Typography>
        <form onSubmit={handleRegister}>
          <Grid>
            <Grid>
              <FormControl variant="outlined" fullWidth margin="normal">
                <TextField
                    className={classes.textField}
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl variant="outlined" fullWidth margin="normal">
                <TextField
                    className={classes.textField}
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} variant="outlined" fullWidth margin="normal">
                <TextField
                    className={classes.textField}
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText >
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl error={!!formErrorMessage.confirmPassword} variant="outlined" fullWidth margin="normal">
                <TextField
                    className={classes.textField}
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid container justify="center">
            <AuthButton type="submit" variant="contained" size="large" color="primary" className={classes.button}>
              Create
            </AuthButton>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
