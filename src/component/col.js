import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const Col = (props) => {
    let styles = [...props.style]

    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}



Col.defaultProps = {
    style : [],
}

Col.propTypes = {
    style : PropTypes.array.isRequired,
}


export {Col}