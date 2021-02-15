import React from 'react';
import styles from './Catalog.module.css';
import {Divider} from '@material-ui/core'


const CatalogPage = () => {
    return (
        <div className={styles.topSelector}>
            <div style={{background: "rgb(195, 51, 51)", color: 'whitesmoke'}}>
                <h3 style={{paddingTop: '2%'}}>Hot Sales %</h3>
                <p>Discounts of up to 40% and additional 20% for promocodes</p>
            </div>
            
            <Divider />

            <div style={{display: 'flex', padding: '2% 0', background:"#f0eeee", justifyContent: 'space-evenly'}}>
                <a>Women</a>
                <a>Men</a>
                <a>Kids</a>
            </div>
        </div>
    )
}

export default CatalogPage;