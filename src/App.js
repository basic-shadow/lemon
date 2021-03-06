import React from 'react';
import {HomePage, CatalogPage, MainNavBar, CatalogNavBar, SignInPage, SignUpPage, Footer} from './components';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from 'gsap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.myText1 = React.createRef();
        this.myText2 = React.createRef();
        
    }

    async componentDidMount() {
        const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
        t1.fromTo(this.myRef2, { y: '20%' }, { y: '-100%', duration: 1.2 });
        t1.fromTo(this.myRef1, { opacity: 0, x: '80%' }, { opacity: 1, x: '0%', duration: 1.5 });
    }


    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <div className={styles.container} ref={el => this.myRef1 = el}>
                <Router>
                    <MainNavBar/>
                    <CatalogNavBar />
                    <Switch>
                        <Route exact path="/lemon" component={HomePage} />
                        <Route path="/catalog" component={CatalogPage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/signup" component={SignUpPage} />
                    </Switch>
                </Router>
                <Footer>       
                </Footer>
                </div>
                <div className={styles.start} ref={el => this.myRef2 = el}>
                </div>

            </div>
        )
    }
}

export default App;