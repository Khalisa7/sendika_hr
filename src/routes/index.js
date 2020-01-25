

import React, { Fragment } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route } from "react-router-dom";
import {BeatLoader} from 'react-spinners/BarLoader'



const Home = Loadable({
    loader: () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve( import('@src/pages/home') ), 2000);
        }),
    loading: ({ pastDelay }) => (pastDelay ? <div>Loading...</div> : null),
    delay: 50
});

const Notification = Loadable({
    loader: () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve( import('@src/pages/notification') ), 2000);
        }),
    loading: ({ pastDelay }) => (pastDelay ? <div>Loading...</div> : null),
    delay: 50
});




function Routes () {
    return(
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/notification" component={Notification} />
            </Switch>
        </Fragment>
    )
}
export {Routes} 