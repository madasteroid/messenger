import React from "react";
import backgroundImage from "../../../src/assets/img/bg-img.png";
import { Typography, Paper, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bubble from "../../assets/svg/bubble";

const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
    },
    paper: {
        backgroundImage: ` url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        minHeight: "100vh",
    },
    gradient: {
        background: "linear-gradient(#3A8DFF, #86B9FF)",
        height: "100%",
        minHeight: "100vh",
        opacity: 0.85,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    content: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: "100px",
    },
    subtitle1:{
        color: "#fff",
        fontSize: "29px",
        margin: "20px",
        lineHeight: "50px"
    },
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container} display={{ xs: "none", sm: "block" }}>
            <Paper className={classes.gradient} elevation={0} square/>
            <Paper className={classes.paper} elevation={0} square/>
            <Box className={classes.content}>
                <Grid container direction="column" spacing={2}>
                    <Grid item align="center">
                        <Bubble color="#fff" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h2" align="center" className={classes.subtitle1}>
                            Converse with anyone with any language
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Banner;
