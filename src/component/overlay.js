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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'



// Main Container Sidebar
function Overlay(props){
    const active = props.active
    let classNames = '';

    if(active){
        classNames = 'overlay active'
    }
    else{
        classNames = 'overlay'
    }
    
    return(
        <Fragment>
            <div className={classNames} onClick={props.click}>
                <span>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>
        </Fragment>
    )
    
}



export {Overlay}