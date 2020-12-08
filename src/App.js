import React from 'react';

import {HomePage, CatalogPage, MainNavBar, CatalogNavBar, SignInPage, SignUpPage} from './components';
import styles from './App.module.css';

import { fetchData } from './api'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";



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
                <Router>
                    <MainNavBar />
                    <CatalogNavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/signup" component={SignUpPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;