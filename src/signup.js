import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(5, 4),
            position: "absolute",
            left: "38%",
            top: "25%"
        },

        heading: {
            padding: 20,
            marginBottom: 30
        },

        textInput: {
            width: "400px"
        },

        button: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            margin: 20,
            marginTop: 70
        },

        footer: {
            marginTop: 30
        }
    })
);

function Signup() {
    const classes = useStyles();
    return (
        <div className="App">
            <AppBar position="top">
                <Toolbar>
                    <Typography variant="h4" component="h1">
                        Sign Up
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper className={classes.root}>
                <Typography
                    variant="h3"
                    component="h3"
                    className={classes.heading}
                >
                    Sign Up
                </Typography>
                <Typography component="p">
                    <form>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            className={classes.textInput}
                        />
                        <br />
                        <TextField
                            id="outlined-name"
                            label="Password"
                            margin="normal"
                            variant="outlined"
                            className={classes.textInput}
                        />
                        <br />

                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Sign Up
                        </Button>
                    </form>
                </Typography>
                <Typography component="h3" className={classes.footer}>
                    Welcome to chat service created by Anim and Helly
                </Typography>
            </Paper>
        </div>
    );
}

export default Signup;
