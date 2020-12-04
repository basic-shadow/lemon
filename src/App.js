import React from 'react';

import {HomePage, CatalogPage} from './components';
import styles from './App.module.css';

import { fetchData } from './api'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    async componentDidMount() {
        // const data = await fetchData();
    }


    render() {
        return (
            <div className={styles.container}>
                <HomePage />
                <CatalogPage />
            </div>
        )
    }
}

export default App;