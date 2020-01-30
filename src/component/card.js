import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

// Card Component
function Card(props){
    let styles = ['card', ...props.style]

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}

function CardHeader(props){
    let styles = ['card-header', ...props.style] 

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}

function CardBody(props){
    let styles = ['card-body', ...props.style] 

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}

function CardFooter(props){
    let styles = ['card-footer', ...props.style]

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}


// PropTypes Default Value
Card.defaultProps = {
    style : []
}

CardHeader.defaultProps = {
    style : []
}

CardBody.defaultProps = {
    style : []
}

CardFooter.defaultProps = {
    style : []
}


// PropTypes Checking
Card.propTypes = {
    style : PropTypes.array.isRequired
}

CardHeader.propTypes = {
    style : PropTypes.array.isRequired
}

CardBody.propTypes = {
    style : PropTypes.array.isRequired
}

CardFooter.propTypes = {
    style : PropTypes.array.isRequired
}


export { Card, CardHeader, CardBody, CardFooter }