/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */


import React, { Fragment } from 'react'
import PropTypes, { func } from 'prop-types'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function Navbar(props){
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top head-navbar">
                <div className="container">
                    {props.children}
                </div>
            </nav>
        </Fragment>
    )
}

function NavbarBrand(props){
    return(
        <Fragment>
            <a className="navbar-brand" href="#" onClick={props.click} >
                <FontAwesomeIcon icon={props.active?faBars:faArrowLeft}/>
                {props.children}
            </a>
        </Fragment>
    )
}

function NavbarRight(props){
    return(
        <Fragment>
            <ul className="navbar-nav nav ml-auto">
                {props.children}
            </ul>
        </Fragment>
    )
}

function NavbarLink(props){
    let styles = ["nav-item", ...props.style]

    if(props.url !== null){
        return(
            <Fragment>
                <li className={styles.join(' ')} onClick={props.click} >
                    <Link to={props.url}  className="nav-link" >
                        {props.icon}
                        <span>
                            {props.children}
                        </span>
                    </Link>
                </li>
            </Fragment>
        )
    }
    else{
        return(
            <Fragment>
                <li className={styles.join(' ')} onClick={props.click} >
                    <a className="nav-link" href="#" >
                        {props.icon}
                        <span>
                            {props.children}
                        </span>
                    </a>
                </li>
            </Fragment>
        )
    }
    
}



Navbar.defaultProps = {}
Navbar.propTypes = {}

NavbarBrand.defaultProps = {
    active : false,
    click : null
}
NavbarBrand.propTypes = {
    active : PropTypes.bool,
    click : PropTypes.func
}

NavbarRight.defaultProps = {}
NavbarRight.propTypes = {}

NavbarLink.defaultProps = {
    url : null,
    icon : null,
    style : [],
    click : null
}
NavbarLink.propTypes = {
    url : PropTypes.string,
    icon : PropTypes.element,
    style : PropTypes.array,
    click : PropTypes.func
}


export { Navbar, NavbarBrand, NavbarRight, NavbarLink}