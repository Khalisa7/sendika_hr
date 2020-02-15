/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */


import React, { useState, Fragment } from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'



// Main Container Sidebar
const Sidebar = (props) => {
    const { children } = props

    return(
        <div className="sidebar">
            {children}
        </div>
    )
    
}




// Logo On Sidebar
const Sidebar_Logo = (props) => {
    const { firstName } = props

    return(
        <Fragment>
            <div className="sidebar-title">
                <h4>
                    <span>{firstName}</span>
                </h4>
            </div>
        </Fragment>
    )
}




// Profile Picture On Sidebar If Exists
const Sidebar_ProfilePicture = (props) => {
    const { picture } = props

    return(
        <Fragment>
            <div className="sidebar-profile">
                <div className="sidebar-picture">
                    <img src={picture}  />
                </div>
                
                
                <p className="sidebar-username">Herlina Sunaryanto</p>
            </div>
        </Fragment>
    )
}



// Sidebar Content Wrapper
const Sidebar_Content = (props) => {
    const {children} = props

    return(
        <Fragment>
            <div className="sidebar-content">
                <ul className="menu">
                    {children}
                </ul>
            </div>
        </Fragment>
    )
}


// Sidebar Single Menu
const Sidebar_SingleMenu = (props) => {    
    let classNames = ''

    if(props.active === props.i){
        classNames = 'active'
    }else{
        classNames = undefined
    }

    
    
    return(
        <Fragment>
            <li className={classNames}>
                <Link to={props.url}  onClick={()=>{props.onclick()}} className="menu-item" >
                    {props.icon}
                    <span>
                        {props.children}
                    </span>
                </Link>
            </li>
        </Fragment>
    )
}







export {Sidebar, Sidebar_Content, Sidebar_Logo, Sidebar_ProfilePicture, Sidebar_SingleMenu }