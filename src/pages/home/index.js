/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */

 
import React, { Fragment, Component} from 'react'
import { Container } from '@src/component/container'
import { Row } from '@src/component/row'
import { Col } from '@src/component/col'
import { ProfilePic } from '@src/component/profilepic'
import { Card, CardHeader, CardBody } from '@src/component/card'
import { Media, MediaBody } from '@src/component/media'
import img from '@src/assets/img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLuggageCart, faIdCard, faHandHoldingHeart, faFileCode, faGem, faMobile, faTable, faCreditCard, faPlaneDeparture, faChevronRight } from '@fortawesome/free-solid-svg-icons'


class Home extends Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <Fragment>
                <Container style={['home']}>
                    <Row style={['justify-content-center']}>
                        <Col style={['col-12', 'col-lg-4', 'department-card']}>
                            <Row style={['employee-login']}>
                                <Col style={['col-12']}>
                                <Media>
                                    <ProfilePic imgSrc={img} imgAlt={'Herlina Sunaryanto'} />
                                    <MediaBody>
                                        <h5 className="mb-1">Herlina Sunaryanto</h5>
                                        <p>Human Resource Administrator</p>
                                    </MediaBody>
                                </Media>
                                </Col>
                            </Row>
                            <Row style={['employee-holiday','text-center']}>
                                <Col style={['col-4']}>
                                    <small>Sisa cuti</small>
                                    <h6 className="mb-0">14 Hari</h6>
                                </Col>
                                <Col style={['col-4']}>
                                    <small>Terpakai</small>
                                    <h6 className="mb-0">3 Hari</h6>
                                </Col>
                                <Col style={['col-4']}>
                                    <small>Sakit</small>
                                    <h6 className="mb-0">2 Hari</h6>
                                </Col>
                            </Row>
                            <Row style={['employee-off']}>
                                <Col style={['col-12']}>
                                    <p className="d-inline-block mb-0 py-2">
                                        <span className="mr-3"><FontAwesomeIcon icon={faPlaneDeparture} className="fa-fw"/></span>
                                        Who's Off Today</p>
                                    <a href="#" className="float-right py-2">
                                        <FontAwesomeIcon icon={faChevronRight} className="fa-fw"/>
                                    </a>
                                </Col>

                                <Col style={['col-12']}>
                                    <Media style={['mb-2']}>
                                        <ProfilePic imgSrc={img} imgAlt={'Herlina Sunaryanto'} />
                                        <MediaBody>
                                            <h6 className="mb-0">Herlina Sunaryanto</h6>
                                            <small className="badge annual-leave">Annual Leave</small>
                                            <br/>
                                            
                                        </MediaBody>
                                    </Media>
                                    <Media style={['mb-2']}>
                                        <ProfilePic imgSrc={img} imgAlt={'Herlina Sunaryanto'} />
                                        <MediaBody>
                                            <h6 className="mb-0">Herlina Sunaryanto</h6>
                                            <small className="badge sick-leave">Sick Leave</small>
                                        </MediaBody>
                                    </Media>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={['col-12', 'col-lg-8', 'feature-card', 'text-center']}>
                            <Row>
                                <Col style={['col-md-4' , 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faLuggageCart} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Request Time Off</h6>
                                            <p className="mb-0">Request time off and check your balance</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Request Time Off</h6>
                                            <a href="#" className="btn">Request Time Off</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4' , 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faIdCard} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Company's Directory</h6>
                                            <p className="mb-0">Search for coworkers and their contact info</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Companies Directory</h6>
                                            <a href="#" className="btn">See Directories</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4' , 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Benefits</h6>
                                            <p className="mb-0">Which benefits you are enrolled in</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Benefits</h6>
                                            <a href="#" className="btn">See Your Benefits</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4' , 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faFileCode} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Training</h6>
                                            <p className="mb-0">Request time off and check your balance</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Training</h6>
                                            <a href="#" className="btn">Create New Agenda</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4', 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faGem} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Goals</h6>
                                            <p className="mb-0">Search for coworkers and their contact info</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Goals</h6>
                                            <a href="#" className="btn">See Your Milestones</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4', 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faMobile} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Mobile Apps</h6>
                                            <p className="mb-0">Which benefits you are enrolled in</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Mobile Apps</h6>
                                            <a href="#" className="btn">Download Mobile Version</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4', 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faTable} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">QPI</h6>
                                            <p className="mb-0">Check Your Quality Performance Index</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">QPI</h6>
                                            <a href="#" className="btn">Check QPI</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                <Col style={['col-md-4', 'col-3']}>
                                    <Media>
                                        <div className="icon-box">
                                            <FontAwesomeIcon icon={faCreditCard} className="fa-fw d-block"/>
                                        </div>
                                        <MediaBody style={['align-self-end']}>
                                            <h6 className="mb-2">Payroll</h6>
                                            <p className="mb-0">Which benefits you are enrolled in</p>
                                        </MediaBody>
                                        <MediaBody style={['align-self-end', 'hover-show']}>
                                            <h6 className="mb-2">Payroll</h6>
                                            <a href="#" className="btn">Make Your Payroll</a>
                                        </MediaBody>
                                    </Media>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Home