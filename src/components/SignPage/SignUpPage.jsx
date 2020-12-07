import React, { useState } from 'react';

import styles from "./SignUpPage.module.css";

import { FormControl, TextField } from '@material-ui/core';

const SignUpPage = () => {

    return (
        <FormControl className={styles.formcontrol}>
            <TextField label="Login" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <TextField label="Re-enter password" variant="outlined" />
        </FormControl>
    )
}

export default SignUpPage;