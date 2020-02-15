import React,{Component, Fragment} from 'react'


const Tabs = (props) => {
    const {
        id,
        children
    } = props

    
    return(
        <Fragment>
            <div className="employee-profile tabs-wrapper" id={id}>
                {children}
            </div>
        </Fragment>
    )
}

const Tabs_Nav = (props) => {
    const {children} = props

    return(
        <Fragment>
            <ul className="nav nav-pills mb-3">
                {children}
            </ul>
        </Fragment>
    )
}

const Tabs_NavLink = (props) => {
    return(
        <Fragment>
            <li className="nav-item">
                <a className={props.num === 1 ? "nav-link active":"nav-link"} data-toggle="pill" role="tab" href={"#"+props.target} aria-selected="true">{props.children}</a>
            </li>
        </Fragment>
    )
}

const Tabs_ContentWrapper = (props) => {
    const {
        id, 
        children
    } = props

    return(
        <Fragment>
            <div className="tab-content mt-5" id={id}>
                {children}
            </div>
        </Fragment>
    )
}

const Tabs_ContentChildren = (props) => {
    const {
        num, 
        id, 
        children
    } = props

    return(
        <Fragment>
            <div className={num === 1 ? "tab-pane fade show active" : "tab-pane fade"} id={id} role="tabpanel">
                {children}              
            </div>
        </Fragment>
    )
}

export {
    Tabs, 
    Tabs_Nav, 
    Tabs_NavLink, 
    Tabs_ContentWrapper, 
    Tabs_ContentChildren
}