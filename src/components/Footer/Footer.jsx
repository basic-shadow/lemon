import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import styles from './Footer.module.css';
import { RiCopyrightLine } from 'react-icons/ri';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.footerBG}>
            <div className={styles.grid}>

                <div className={styles.paymentmethods}>

                    <Typography className={styles.subheader}>Payment methods</Typography>
                    <ul className={styles.lemonul}>
                        <li><a> MasterCard</a></li>
                        <li><a>VISA</a></li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <Typography className={styles.subheader}>Contacts</Typography>
                    <ul className={styles.lemonul}>
                        <li className={styles.lemonli}>1-234-567-8912</li>
                        <li className={styles.lemonli}>1-234-567-8934</li>
                        <li className={styles.lemonli}>email@gmail.com</li>
                        <li className={styles.lemonli}><a>Ask Bot</a></li>
                    </ul>
                </div>
                <div className={styles.applications}>
                    <Typography className={styles.subheader}>Mobile Applications</Typography>
                    <ul className={styles.lemonul}>
                        <li style={{ display: 'flex', }}>
                            <FaAppStoreIos style={{
                                transform: 'translateX(-32%)', fontSize: '1.4em', marginLeft: '1.5%',

                            }} />
                            <Typography className={styles.appshover}>App Store</Typography>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <FaGooglePlay style={{ transform: 'translateX(-32%)', fontSize: '1.4em', marginLeft: '1.5%' }} />
                            <Typography className={styles.appshover}>Google Play</Typography>
                        </li>
                    </ul>
                </div>
                <div className={styles.basicinfo}>
                    <Typography className={styles.subheader}>Basic Info</Typography>
                    <ul className={styles.lemonul}>
                        <li className={styles.lemonli}>Order Status</li>
                        <li className={styles.lemonli}>Shipping Rates</li>
                        <li className={styles.lemonli}>Returns</li>
                        <li className={styles.lemonli}>Size Guide</li>
                        <li className={styles.lemonli}><a>FAQs</a></li>
                    </ul>
                </div>

                <div className={styles.lemonisla}>
                    <h1 className={styles.logo}>
                        Lemon.isla
                </h1>
                    <ul className={styles.lemonul}>
                        <li className={styles.lemonli}><a href="#">telegram</a></li>
                        <li className={styles.lemonli}><a href="#">instagram</a></li>
                        <li className={styles.lemonli}><a href="#">youtube</a></li>
                        <li className={styles.lemonli}><a href="#">facebook</a></li>
                    </ul>
                </div>
            </div>
            <Divider style={{ backgroundColor: 'black', height: '0.4vh', opacity: 0.4 }} />
            <div className={styles.lowfooter}>
                <RiCopyrightLine style={{
                    color: 'white', opacity: 0.7, marginLeft: '25%',
                    transform: 'translate(25%, -18%)'
                }} />
                <Typography variant='body2' style={{
                    color: 'white', opacity: 0.7, marginLeft: '0.5em'
                }}>
                    2020 All rights reserved. Designed by isla</Typography>
                <h1 style={{ color: 'white', marginLeft: 'auto', width: '20%', opacity: 0.7 }}>
                    sponsors
                </h1>
            </div>
        </div>
    );
}

export default Footer;