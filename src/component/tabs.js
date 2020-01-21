import React,{Component, Fragment} from 'react'

function Tabs (props){
    return(
        <div className="employee-profile tabs-wrapper" id={props.id}>
            {props.children}
        </div>
    )
}

function Tabs_Nav(props){
    return(
        <Fragment>
            <ul className="nav nav-pills mb-3">
                {props.children}
            </ul>
        </Fragment>
    )
}

function Tabs_NavLink(props){
    return(
        <Fragment>
            <li className="nav-item">
                <a className={props.active? "nav-link active":"nav-link"} data-toggle="pill" role="tab" aria-controls={props.target} aria-selected="true">{props.children}</a>
            </li>
        </Fragment>
    )
}

function Tabs_ContentWrapper(props){
    return(
        <Fragment>
            <div className="tab-content" id={props.id}>
                {props.children}
            </div>
        </Fragment>
    )
}

function Tabs_Contentchildren(props){
    return(
        <Fragment>
            <div className={props.active? "tab-pane fade show active" : "tab-pane fade"} id={props.id} role="tabpanel">
                {props.children}              
            </div>
        </Fragment>
    )
}

export {
    Tabs, 
    Tabs_Nav, 
    Tabs_NavLink, 
    Tabs_ContentWrapper, 
    Tabs_Contentchildren
}