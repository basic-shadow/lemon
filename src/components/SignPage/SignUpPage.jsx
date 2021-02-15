import React, { useState } from 'react';
import styles from "./SignInPage.module.css";
import { Paper, Grid, Typography, Divider, Button, TextField, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';


const SignUpPage = () => {
    const [signin, setSignin] = useState({
        email: "",
        login: "",
        password: "",
        re_password: "",
        error: ""
    });


    const handleSignin = (event) => {
        event.preventDefault();
        const valid = validate();
        console.log(signin);
    };

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.name);
        setSignin({
            [event.target.name]: event.target.value
        });
    };

    const validate = () => {
        let error = "";

        if (signin.login) {
            error = "invalid email";
            setSignin({
                ['error']: error
            });
            return false;
        };
        return true;
    }
    console.log(signin);

    return (
        <>
            <CssBaseline />
            <div className={styles.signin}>

                <Paper className={styles.paper}>
                    <Typography variant='h4'>Create Account</Typography>
                    <Divider />
                    <form className={styles.form}>
                        <TextField label="Email" name="email">

                        </TextField>
                        <TextField label="Login" name="login">

                        </TextField>
                        <TextField type="password" label="Password" name="password" helperText="Passwords must be at least 6 characters">

                        </TextField>
                        <TextField type="password" label="Re-enter password" name="re_password">

                        </TextField>
                        <Button variant='contained' style={{ marginTop: '20%' }} color="secondary">
                            Sign Up
                        </Button>
                    </form>
                    <div style={{ marginBottom: '10%' }}>
                        <Typography variant='h6' >Account exist?  <a href='/signin'>Sign-In</a></Typography>
                    </div>
                </Paper>
            </div >
        </>
    )
}

export default SignUpPage;