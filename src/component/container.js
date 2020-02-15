import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const Container = (props) => {

    let styles = []

    if(props.fluid){
        styles.push("container-fluid")
        styles.push(...props.style)
    }
    else{
        styles.push("container")
        styles.push(...props.style)
    }


    return(
        <Fragment>
            <div className={styles.join(' ')}>
                {props.children}
            </div>
        </Fragment>
    )
}



Container.defaultProps = {
    style : [],
    fluid : false
}

Container.propTypes = {
    style : PropTypes.array.isRequired,
    fluid : PropTypes.bool.isRequired
}


export {Container}