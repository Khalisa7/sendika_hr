/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */

 
import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faUser, faBell, faTag, faCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Home(props){

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 home-dashboard">
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
                    <div className="profile-detail">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Data Pribadi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Hubungan Kerja</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Tanggungan</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="col-3"><p>Nama</p></div>
                                    <div className="col-9"><p>Herlina Sunaryanto</p></div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home