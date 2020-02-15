import React, {Fragment} from 'react'

const Accordion = (props) =>{
    return(
        <Fragment>
            {props.children}
        </Fragment>
    )
}

const AccordionHeader = (props) =>{
    return(
        <Fragment>
            <h5>{props.label}</h5>
            <span 
            className="float-right"
            data-toggle="collapse" 
            data-target="#collapseOne" 
            aria-expanded="true" 
            aria-controls="collapseOne"
            >hai</span>
        </Fragment>
    )
}

export {Accordion, AccordionHeader}