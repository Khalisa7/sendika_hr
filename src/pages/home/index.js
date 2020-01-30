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
import { faLuggageCart, faIdCard, faHandHoldingHeart, faFileCode, faGem, faMobile } from '@fortawesome/free-solid-svg-icons'


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
                        <Col style={['col-12', 'col-md-4', 'mb-4', 'department-card']}>
                            <Media>
                                <ProfilePic imgSrc={img} imgAlt={'Herlina Sunaryanto'} style={['mr-3']} />
                                <MediaBody style={['align-self-end']}>
                                    <h5 className="mb-1">Herlina Sunaryanto</h5>
                                    <p>Human Resource Administrator</p>
                                </MediaBody>
                            </Media>
                            <Row style={['mt-3']}>
                                <Col style={['col-4']}>
                                    <small>Sisa cuti</small>
                                    <h6 className="mb-0">14 Hari</h6>
                                </Col>
                                <Col style={['col-4']}>
                                    <small>Cuti terpakai</small>
                                    <h6 className="mb-0">3 Hari</h6>
                                </Col>
                                <Col style={['col-4']}>
                                    <small>Cuti sakit</small>
                                    <h6 className="mb-0">2 Hari</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={['text-center', 'col-12', 'col-md-8', 'feature-card']}>
                            <Row>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faLuggageCart} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Request Time Off</h6>
                                            <p className="mb-0">Request time off and check your balance</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faIdCard} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Company's Directory</h6>
                                            <p className="mb-0">Search for coworkers and their contact info</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faHandHoldingHeart} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Benefits</h6>
                                            <p className="mb-0">See which company benefits you are enrolled in</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faFileCode} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Training</h6>
                                            <p className="mb-0">Request time off and check your balance</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faGem} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Goals</h6>
                                            <p className="mb-0">Search for coworkers and their contact info</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col style={['col-4']}>
                                    <Card>
                                        <CardBody>
                                            <FontAwesomeIcon icon={faMobile} className="fa-fw d-block m-auto"/>
                                            <h6 className="mb-2 mt-4">Mobile Apps</h6>
                                            <p className="mb-0">See which company benefits you are enrolled in</p>
                                        </CardBody>
                                    </Card>
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