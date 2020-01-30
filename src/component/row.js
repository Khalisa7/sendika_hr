import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

function Row(props){

    let styles = ['row', ...props.style]

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}



Row.defaultProps = {
    style : [],
    fluid : false
}

Row.propTypes = {
    style : PropTypes.array.isRequired,
    fluid : PropTypes.bool.isRequired
}


export {Row}