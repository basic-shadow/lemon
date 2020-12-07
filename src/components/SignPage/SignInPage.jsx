import React, { useState } from 'react';
import styles from "./SignInPage.module.css";
import { Paper, Grid, Typography, FormControl } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';

import FormInput from './FormInput';


const SignInPage = () => {
    const methods = useForm();

    return (
        <>
            <div className={styles.signin}>
                <Paper className={styles.paper}>
                    <Typography variant='h4' align='center'>Sign-In</Typography>
                    <FormProvider {...methods}>
                        <form >
                            <Grid container spacing={3} style={{ height: '220px' }}>
                                <FormInput label="Email or login" name='login' required />
                                <FormInput label="Password" name='password' required />
                            </Grid>
                        </form>
                    </FormProvider>
                </Paper>
            </div >
        </>
    )
}

export default SignInPage;