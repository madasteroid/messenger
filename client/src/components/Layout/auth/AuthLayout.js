import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Banner from "../../Banner/banner";


const useStyles = makeStyles(()=> ({
    root: {
        display: "flex",
        padding: 0,
    },
    FormContainer: {
        padding: "40px",
    }
}));


const AuthLayout = (props) => {
    const classes = useStyles();
    return(
      <Container component="main" maxWidth={false} className={classes.root}>
          <Grid container direction="row">
            <Grid item sm={4} xs={12}>
               <Banner/>
            </Grid>

            <Grid item sm={8} xs={12} className={classes.FormContainer}>
                {props.children}
            </Grid>
          </Grid>
      </Container>
    );
}

export default AuthLayout;
