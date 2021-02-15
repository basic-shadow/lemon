import React, {useState} from 'react';
import styles from './Catalog.module.css';
import {Divider} from '@material-ui/core'

import {MdFavorite} from 'react-icons/md';

import coats from '../../images/coats.jpeg';
import jackets from '../../images/jackets.jpg'

const CatalogPage = ({location: {state : {name} }}) => {
    const [catalogName, setCatalogName] = useState(name + " Catalog");

    const renderCard1 = () => {
        return (
            <div className={styles.card}>
                 <img src={coats}/>
                <div><MdFavorite/></div>
                <h4 style={{padding: '4% 0'}}>$200</h4>
                <h5>Brand / <span style={{color: "rgb(140,140,140)"}}>Clothes</span></h5>
            </div>
        );
    }

    const renderCard2 = () => {
        return (
            <div className={styles.card}>
                <img src={jackets}/>
                <div><MdFavorite/></div>
                <h4 style={{padding: '4% 0'}}>$150</h4>
                <h5>Brand / <span style={{color: "rgb(140,140,140)"}}>Clothes</span></h5>
            </div>
        );
    }

    return (
        <div className={styles.body}>
            <div className={styles.topSelector}>
                <div style={{background: "rgb(195, 51, 51)", color: 'whitesmoke'}}>
                    <h3 style={{paddingTop: '2%'}}>Hot Sales %</h3>
                    <p>Discounts of up to 40% and additional 20% for promocodes</p>
                </div>
                
                <Divider />

                <div style={{display: 'flex', padding: '1% 0', background:"#f0eeee", justifyContent: 'space-evenly'}}>
                    <a onClick={() => setCatalogName(() => "Women Catalog")}>Women</a>
                    <a onClick={() => setCatalogName(() => "Men Catalog")}>Men</a>
                    <a onClick={() => setCatalogName(() => "Kids Catalog")}>Kids</a>
                </div>
            </div>
            <div className={styles.container}>
                <section>
                    <div style={{padding: '10% 0'}}>
                        <div style={{display: 'flex', alignItems: 'end'}}>
                            <h3>{catalogName}</h3>
                            <span style={{color: "rgb(200,200,200)", paddingLeft: '3%'}}> 142292 products</span>
                        </div>
                    </div>
                    <div>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>All</h3>
                            <span style={{color: "rgb(200,200,200)", paddingRight: '70%'}}>14229</span>
                        </div>
                        <hr/>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>New-In</h3>
                            <span style={{color: "rgb(200,200,200)", paddingRight: '60%'}}>14229</span>
                        </div>
                        <hr />
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>Shoes</h3>
                            <span style={{color: "rgb(200,200,200)", paddingRight: '65%'}}>14229</span>
                        </div>
                        <hr />
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>Accessories</h3>
                            <span style={{color: "rgb(200,200,200)", paddingRight: '50%'}}>14229</span>
                        </div>
                        <hr />
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3>Clothes</h3>
                            <span style={{color: "rgb(200,200,200)", paddingRight: '60%'}}>14229</span>
                        </div>
                    </div>
                </section>
                <div style={{gridRow: '1', gridColumn: '2'}}>
                    {renderCard1()}
                </div>
                <div style={{gridRow: '1', gridColumn: '3'}}>
                    {renderCard1()}
                </div>
                <div style={{gridRow: '1', gridColumn: '4'}}>
                    {renderCard1()}
                </div>

                <div style={{gridRow: '2', gridColumn: '2'}}>
                    {renderCard2()}
                </div>
                <div style={{gridRow: '2', gridColumn: '3'}}>
                    {renderCard2()}
                </div>
                <div style={{gridRow: '2', gridColumn: '4'}}>
                    {renderCard2()}
                </div>

                <div style={{gridRow: '3', gridColumn: '2'}}>
                    {renderCard1()}
                </div>
                <div style={{gridRow: '3', gridColumn: '3'}}>
                    {renderCard1()}
                </div>
                <div style={{gridRow: '3', gridColumn: '4'}}>
                    {renderCard1()}
                </div>

                <div style={{gridRow: '4', gridColumn: '2'}}>
                    {renderCard2()}
                </div>
                <div style={{gridRow: '4', gridColumn: '3'}}>
                    {renderCard2()}
                </div>
                <div style={{gridRow: '4', gridColumn: '4'}}>
                    {renderCard2()}
                </div>
            </div>
        </div>
    )
}

export default CatalogPage;