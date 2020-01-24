/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */

 
import React, { useState, Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { data } from '@src/interfaces'
import { Tabs, Tabs_Nav, Tabs_NavLink, Tabs_ContentWrapper, Tabs_ContentChildren } from '@src/component/tabs'

function Home(props){
    const [tabActive, setTabActive] = useState(1)
    console.log(data.dependents)
    return(
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 home-dashboard">
                        <div className="page-title my-4">
                            <h3>Dashboard</h3>
                        </div>
                        <div className="profile-silluet">
                            <div className="media">
                                <div className="initial-box">
                                    <h1>HS</h1>
                                </div>
                                <div className="media-body">
                                    <h5 className="mt-0">Herlina Sunaryanto</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
                                    <br/>
                                    <p>
                                        <span className="mr-2"><FontAwesomeIcon icon={faEnvelope} className="fa-fw mr-2" />sunaryanto@icube.us</span>
                                        <span className="mr-2"><FontAwesomeIcon icon={faPhone} className="fa-fw mr-2" />098765434567</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Tabs className="employee-profile">
                            <Tabs_Nav>
                                <Tabs_NavLink active={tabActive} num={1} target={"profile-tabs"}>
                                    Data Diri
                                </Tabs_NavLink>
                                <Tabs_NavLink active={tabActive} num={2} target={"relation-tabs"}>
                                    Hubungan
                                </Tabs_NavLink>
                                <Tabs_NavLink active={tabActive} num={3} target={"dependents-tabs"}>
                                    Tanggungan
                                </Tabs_NavLink>
                                <Tabs_NavLink active={tabActive} num={4} target={"emergency-number-tabs"}>
                                    Kontak Darurat
                                </Tabs_NavLink>
                            </Tabs_Nav>
                            <Tabs_ContentWrapper id="employee-profile">
                                <Tabs_ContentChildren num={1} id={"profile-tabs"}>
                                    { data.profile.map((res, key)=>{
                                        return(
                                            <div className="row" key={key}>
                                                <div className="col-3"><p>{res.label}</p></div>
                                                <div className="col-9"><p>{res.value}</p></div>
                                            </div>
                                        )
                                    })}
                                </Tabs_ContentChildren>
                                <Tabs_ContentChildren num={2} id={"relation-tabs"}>
                                    { data.relation.map((res, key)=>{
                                        return(
                                            <div className="row" key={key}>
                                                <div className="col-3"><p>{res.label}</p></div>
                                                <div className="col-9"><p>{res.value}</p></div>
                                            </div>
                                        )
                                    })}
                                </Tabs_ContentChildren>
                                <Tabs_ContentChildren num={3} id={"dependents-tabs"}>
                                    { Object.keys(data.dependents).map((res, key)=>{
                                        return (
                                            <div className="mb-4" key={key}>
                                                {data.dependents[res].map((res, key)=>{
                                                    return (
                                                        <div className="row" key={key}>
                                                            <div className="col-3"><p>{res.label}</p></div>
                                                            <div className="col-9"><p>{res.value}</p></div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    }) }
                                </Tabs_ContentChildren>
                                <Tabs_ContentChildren num={4} id={"emergency-number-tabs"}>
                                    { Object.keys(data.emergency_number).map((res, key)=>{
                                        return (
                                            <div className="mb-4" key={key}>
                                                {data.emergency_number[res].map((res, key)=>{
                                                    return (
                                                        <div className="row" key={key}>
                                                            <div className="col-3"><p>{res.label}</p></div>
                                                            <div className="col-9"><p>{res.value}</p></div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    }) }
                                </Tabs_ContentChildren>
                            </Tabs_ContentWrapper>
                        </Tabs>
                    </div>
                    <div className="col-md-4 home-cards">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5>Saldo Cuti</h5>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5>Sakit</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home