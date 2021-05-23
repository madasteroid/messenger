import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AuthButton from "../AuthButton/AuthButton"
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField, makeStyles,
} from "@material-ui/core";
import { login } from "../../store/utils/thunkCreators";

const useStyles = makeStyles(() => ({
  header: {
    padding: "40px 0",
  },
  subtitle1:{
    paddingRight: "30px",
    paddingBottom: "10px",
    color: "#B0B0B0",
    fontWeight: "semiBold"
  },
  textField: {
    margin: "20px 0",
    fontFamily: "OpenSans",
  },
  subtitle2:{
    fontSize: "32px",
    fontWeight: "bold",

  },
  button:{
    fontSize: "20px",
    fontWeight: "bold",
    width: "200px",
    height: "70px",
    margin: "40px 0"
  }

}));

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
        <Typography className={classes.subtitle1}>Don't have an account?</Typography>
        <AuthButton onClick={() => history.push("/register")} color="primary">Create account</AuthButton>
      </Grid>
      <Box width="60%">
        <Typography
            variant="h5"
            component="h1"
            className={classes.subtitle2}
        >
          Welcome back!
        </Typography>
        <form onSubmit={handleLogin}>
          <Grid>
            <Grid>
              <FormControl margin="normal" fullWidth required>
                <TextField className={classes.textField}
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" fullWidth required>
              <TextField
                  className={classes.textField}
                label="Password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid container justify="center">
              <AuthButton type="submit" variant="contained" size="large" color="primary" className={classes.button}>
                Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
