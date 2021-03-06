import React from 'react';
import styles from './SignInPage.module.css';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required, type, value }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={12} >
            <Controller
                as={TextField}
                control={control}
                name={name}
                label={label}
                required={required}
                type={type}
                className={styles.texts}
                value={value}
            />
        </Grid>
    )
}

export default FormInput;