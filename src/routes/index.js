

import React, { Fragment } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route } from "react-router-dom"



const Loader = () => {
    return(
        <div className="loader">Loading...</div>
    )
}

const Home = Loadable({
    loader: () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve( import('@src/pages/home') ), 2000)
        }),
    loading: ({ pastDelay }) => (pastDelay ? <Loader/> : null),
    delay: 1000
});

const Profile = Loadable({
    loader: () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve( import('@src/pages/profile') ), 2000)
        }),
    loading: ({ pastDelay }) => (pastDelay ? <div>Loading...</div> : null),
    delay: 1000
});




function Routes () {
    return(
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Fragment>
    )
}
export {Routes} 