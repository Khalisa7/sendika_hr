import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const Media = (props) =>{
    let styles = ['media', ...props.style]
    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}

const MediaBody = (props) =>{
    let styles = ['media-body', ...props.style]
    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}

// Default Props Value
Media.defaultProps = {
    style : []
}
MediaBody.defaultProps = {
    style : []
}

// Props Checking
Media.propTypes = {
    style : PropTypes.array.isRequired
}
MediaBody.propTypes = {
    style : PropTypes.array.isRequired
}

export {Media, MediaBody}