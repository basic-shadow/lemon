import React, { useState } from 'react';
import styles from "./SignInPage.module.css";
import { Paper, Grid, Typography, Divider, Button, TextField, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';


const SignInPage = () => {
    const [signin, setSignin] = useState({
        login: "",
        password: "",
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
        <div>
            <CssBaseline />
            <div className={styles.signin}>
                <Paper className={styles.paper}>
                    <Typography variant='h4' align='center' style={{ marginTop: '10%' }}>Sign-In</Typography>
                    <Divider />
                    <form onSubmit={e => handleSignin(e)}
                        className={styles.form}>
                        <TextField label="Login" name='login' onChange={(e) => handleChange(e)}>
                            {signin.login}
                        </TextField>

                        <TextField type="password" label='Password' name='password' onChange={(e) => handleChange(e)}>
                            {signin.password}
                        </TextField>

                        <div style={{ color: 'red' }}>
                            {signin.error}
                        </div>
                        <Button variant="contained" style={{ height: '12%' }} color='secondary'
                            onClick={e => handleSignin(e)}
                        >
                            Sign In
                        </Button>
                    </form>
                    <div style={{ marginBottom: '10%' }}>
                        <Typography variant='h6' >New to This?  <a href='/signup'>SignUp</a></Typography>
                    </div>
                </Paper>
            </div >
        </div>
    )
}

export default SignInPage;