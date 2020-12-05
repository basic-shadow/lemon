import React, { useState } from 'react';

import styles from "./SignInPage.module.css";

import { FormControl, TextField } from '@material-ui/core';


const SignInPage = () => {

    return (
        <FormControl className={styles.formcontrol}>
            <TextField label="Login" variant="outlined" />
            <TextField label="Password" variant="outlined" />
        </FormControl>
    )
}

export default SignInPage;