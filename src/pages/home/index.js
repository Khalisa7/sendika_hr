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
import { faLuggageCart, faIdCard, faHandHoldingHeart, faFileCode, faGem, faMobile, faTable, faCreditCard, faDoorOpen } from '@fortawesome/free-solid-svg-icons'


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
                        <Col style={['col-12', 'col-md-4', 'department-card']}>
                            <Media>
                                <ProfilePic imgSrc={img} imgAlt={'Herlina Sunaryanto'} />
                                <MediaBody>
                                    <h5 className="mb-1">Herlina Sunaryanto</h5>
                                    <p>Human Resource Administrator</p>
                                </MediaBody>
                            </Media>
                            <Row style={['mt-3','text-center']}>
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
                        </Col>
                        <Col style={['col-12', 'col-md-8', 'feature-card', 'text-center']}>
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