
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {  faHome, faUser, faUserFriends, faCalendarAlt, faBell, faBlender } from '@fortawesome/free-solid-svg-icons'




const bundle = {
    
    "brand"     : {
        "fullName"  : "Sendika HR",
        "firstName" : "Sendika",
        "lastName"  : "HR",
    },
    "sidebar"   : [
        {
            name    : "home",
            label   : "Home",
            link    : "/",
            active  : true,
            icons   : <FontAwesomeIcon icon={faHome} className="fa-fw" />
        },
        {
            name    : "news",
            label   : "News Feed",
            link    : "/notification",
            active  : false,
            icons   : <FontAwesomeIcon icon={faBell} className="fa-fw" />
        },
        {
            name    : "profile",
            label   : "Update Profile",
            link    : "/profile",
            active  : false,
            icons   : <FontAwesomeIcon icon={faUser} className="fa-fw" />
        },
        {
            name    : "calendar",
            label   : "Calendar",
            link    : "/calendar",
            active  : false,
            icons   : <FontAwesomeIcon icon={faCalendarAlt} className="fa-fw" />
        },
    ]

}

export { bundle }