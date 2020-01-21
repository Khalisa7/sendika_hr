import React from 'react'
import loadable from 'react-loadable'

const pages = {
    "loadingComponent" : () => {
        console.log('loading')
        return (
            <h1>Hai</h1>
        )
    },
    "home" : () => {
        return import('@src/pages/home')
    },
    "notification" : () => {
        console.log('notification')
        return (
            <h1>Hai</h1>
        )
    }
}


const asyncImportPages = {
    "home" : loadable({
        loader : pages.home,
        loading: pages.loadingComponent
    }),
}

const browse = {
    "routes"    : [
        {
            path: "/",
            component: asyncImportPages.home,
            routes:[
                {
                    path: "/sandwiches",
                    component: asyncImportPages.home
                },
                {
                    path: "/tacos",
                    component: asyncImportPages.home,
                    routes: [
                        {
                            path: "/tacos/bus",
                            component: asyncImportPages.home
                        },
                        {
                            path: "/tacos/cart",
                            component: asyncImportPages.home
                        }
                    ]
                }
            ]
        }
    ],
}

export {browse} 