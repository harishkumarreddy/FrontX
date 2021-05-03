import React, { Component, Suspense } from 'react';
import Leftside from './Leftside';
import Header from './Header'
import Footer from './Footer'
import {
    Route, Switch, Redirect
} from 'react-router-dom';
import Home from '../Components/Home'
import Portfolio from '../Components/Portfoio';
import Contact from '../Components/Contact';
import Qualification from '../Components/Qualification';
import Resume from '../Components/Resume';
import Blog from '../Components/Blog';
import Err404 from '../Components/Err404';
import Blogread from '../Components/Blogread';

export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div>
                <div id="wrapper">
                    <Leftside />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content"> 
                            <Header />
                            <div className="container-fluid p-3" > 
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/portfolio" component={Portfolio} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/education" component={Qualification} />
                                    <Route path="/resume" component={Resume} />
                                    <Route path="/blog" component={Blog} />
                                    <Route path="/blog/:post" component={Blogread} />
                                    <Route path="/about" >
                                        <Redirect to="/" />
                                    </Route>
                                    <Route omponent={Err404} />
                                </Switch>
                            </div>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;