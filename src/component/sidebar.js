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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'



// Main Container Sidebar
function Sidebar(props){
    return(
        <div className="sidebar">
            {props.children}
        </div>
    )
    
}




// Logo On Sidebar
function Sidebar_Logo(props){
    return(
        <Fragment>
            <div className="sidebar-title">
                <h4>
                    <span>{props.firstName}</span>
                    {props.lastName}
                </h4>
            </div>
        </Fragment>
    )
}




// Profile Picture On Sidebar If Exists
function Sidebar_ProfilePicture(props){
    return(
        <Fragment>
            <div className="sidebar-profile">
                <div className="sidebar-picture">
                    <img src={props.picture}  />
                </div>
                
                
                <p className="sidebar-username">Herlina Sunaryanto</p>
            </div>
        </Fragment>
    )
}



// Sidebar Content Wrapper
function Sidebar_Content(props){
    let menu = props.menu
    return(
        <Fragment>
            <div className="sidebar-content">
                <ul className="menu">
                    {menu.map((data, key)=>{
                        return <Sidebar_SingleMenu 
                            key={key}
                            active={data.active} 
                            url={data.link} i
                            icon={data.icons}>{data.label}</Sidebar_SingleMenu>
                    })}
                </ul>
            </div>
        </Fragment>
    )
}


// Sidebar Single Menu
function Sidebar_SingleMenu(props){
    let classNames = ''

    if(props.active){
        classNames = 'active'
    }else{
        classNames = ''
    }

    
    
    return(
        <Fragment>
            <li className={classNames}>
                <Link to={props.url} className="menu-item">
                    {props.icon}
                    <span>
                        {props.children}
                    </span>
                    <span className="position-relative float-right"><FontAwesomeIcon icon={faCaretRight}  /></span>
                </Link>
            </li>
        </Fragment>
    )
}







export {Sidebar, Sidebar_Content, Sidebar_Logo, Sidebar_ProfilePicture }