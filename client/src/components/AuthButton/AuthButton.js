import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    button: {
        width: "200px",
        height: "65px",
        boxShadow: "0px 2px 12px 0px rgba(74, 106, 149, 0.2)",
        fontSize: "16px",
        fontWeight: "bold",
        fontColor: "#3A8DFF"
    },
}));

const AuthButton = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} {...props}>
            {props.children}
        </Button>
    );
};

export default AuthButton;
