/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */


import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faTag, faUser, faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent head-navbar">
            {props.children}
        </nav>
    )
}

function NavbarBrand(props){
    return(
        <a className="navbar-brand" href="#" onClick={ ()=> {this.handleSidebarClick(sidebarStatus)} }>
            <FontAwesomeIcon icon={faBars}/>
            {props.children}
        </a>
    )
}

function NavbarRight(props){
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="pr-2"><FontAwesomeIcon icon={faBell} className="fa-fw" /></span>
                </a>
                <div className="dropdown-menu  dropdown-menu-right notification" aria-labelledby="navbarDropdown">
                    <h5 className="dropdown-item title">Notification</h5>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" href="#">
                        <div className="notification-title">
                            <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                            <span className="mr-2">Septian</span>
                            <span className="float-right">20 Juni 2019</span>
                        </div>
                        <div className="notification-body">
                            <p>
                                Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                and get error message  "area code already set"     
                            </p>
                        </div>
                    </div>
                    <div className="dropdown-item" href="#">
                        <div className="notification-title">
                            <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                            <span className="mr-2">Septian</span>
                            <span className="float-right">20 Juni 2019</span>
                        </div>
                        <div className="notification-body">
                            <p>
                                Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                and get error message  "area code already set"     
                            </p>
                        </div>
                    </div>
                    <div className="dropdown-item" href="#">
                        <div className="notification-title">
                            <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                            <span className="mr-2">Septian</span>
                            <span className="float-right">20 Juni 2019</span>
                        </div>
                        <div className="notification-body">
                            <p>
                                Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                and get error message  "area code already set"     
                            </p>
                        </div>
                    </div>
                    <div className="dropdown-item" href="#">
                        <div className="notification-title">
                            <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                            <span className="mr-2">Septian</span>
                            <span className="float-right">20 Juni 2019</span>
                        </div>
                        <div className="notification-body">
                            <p>
                                Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                and get error message  "area code already set"     
                            </p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser} className="fa-fw mr-3" />
                    <span>Herlina Sunaryanto</span>
                </a>
                <div className="dropdown-menu  dropdown-menu-right account" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#"><span className="btn btn-danger btn-block">Logout</span></a>
                </div>
            </li>
        </ul>
    )
}

function NavbarDropdown(props){
    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="pr-2"><FontAwesomeIcon icon={faBell} className="fa-fw" /></span>
            </a>
            <div className="dropdown-menu  dropdown-menu-right notification" aria-labelledby="navbarDropdown">
                <h5 className="dropdown-item title">Notification</h5>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" href="#">
                    <div className="notification-title">
                        <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                        <span className="mr-2">Septian</span>
                        <span className="float-right">20 Juni 2019</span>
                    </div>
                    <div className="notification-body">
                        <p>
                            Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                            and get error message  "area code already set"     
                        </p>
                    </div>
                </div>
                <div className="dropdown-item" href="#">
                    <div className="notification-title">
                        <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                        <span className="mr-2">Septian</span>
                        <span className="float-right">20 Juni 2019</span>
                    </div>
                    <div className="notification-body">
                        <p>
                            Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                            and get error message  "area code already set"     
                        </p>
                    </div>
                </div>
                <div className="dropdown-item" href="#">
                    <div className="notification-title">
                        <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                        <span className="mr-2">Septian</span>
                        <span className="float-right">20 Juni 2019</span>
                    </div>
                    <div className="notification-body">
                        <p>
                            Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                            and get error message  "area code already set"     
                        </p>
                    </div>
                </div>
                <div className="dropdown-item" href="#">
                    <div className="notification-title">
                        <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                        <span className="mr-2">Septian</span>
                        <span className="float-right">20 Juni 2019</span>
                    </div>
                    <div className="notification-body">
                        <p>
                            Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                            and get error message  "area code already set"     
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export { Navbar, NavbarBrand, NavbarRight }