import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

function ProfilePic(props){
    let styles = ['user-profile mr-3', ...props.style]
    return(
        <Fragment>
            <div className={styles.join(' ')}>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </Fragment>
    )
}

ProfilePic.defaultProps = {
    imgSrc : '',
    imgAlt : '',
    style : []
}

ProfilePic.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    imgAlt : PropTypes.string.isRequired,
    style : PropTypes.array.isRequired
}

export {ProfilePic}