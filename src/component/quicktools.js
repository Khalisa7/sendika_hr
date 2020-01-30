import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Media, MediaBody } from '@src/component/media'
import { faTools } from '@fortawesome/free-solid-svg-icons'

function QuickTools (props){
    let styles = ['quick-tools', ...props.style]
    return(
        <Fragment>
            <div className={styles.join(' ')}>
                <div className="quick-tools-header">
                    <Media>
                        <FontAwesomeIcon icon={faTools} className="fa-fw mr-3"/>
                        <MediaBody style={['align-self-end']}>
                            <h6 className="mb-0">Quick Tools</h6>
                            <small>News Feed, Employee, Events</small>
                        </MediaBody>
                    </Media>
                </div>
                <div className="quick-tools-body">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

function QuickToolsBody(props){
    return(
        <Fragment>
            <div className="quick-tools-content">
                {props.children}
            </div>
        </Fragment>
    )
}

function QuickToolsCaption(props){
    return(
        <Fragment>
            <div className="quick-tools-caption">
                <Media>
                    {props.icon}
                    <MediaBody style={['align-self-end']}>
                        <h6>{props.label}</h6>
                    </MediaBody>
                </Media>
            </div>
        </Fragment>
    )
}



QuickTools.defaultProps = {
    style : []
}
QuickTools.propTypes = {
    style : PropTypes.array.isRequired
}

export {QuickTools, QuickToolsBody, QuickToolsCaption}