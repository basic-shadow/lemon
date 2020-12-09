import React from 'react';
import {HomePage, CatalogPage, MainNavBar, CatalogNavBar, SignInPage, SignUpPage, Footer} from './components';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from 'gsap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
        this.myRef = React.createRef();
        
    }

    async componentDidMount() {
        const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
        t1.fromTo(this.myRef, { y: '-100%' }, { y: '0%', duration: 1.5 });

    }


    render() {
        return (
            <div className={styles.container} ref={el => this.myRef = el}>
                <Router>
                    <MainNavBar/>
                    <CatalogNavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/signup" component={SignUpPage} />
                    </Switch>
                </Router>
                <Footer>       
                </Footer>
            </div>
        )
    }
}

export default App;