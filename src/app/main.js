/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */


 
import React,{Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { bundle } from '@src/interfaces'

import { Sidebar, Sidebar_Logo, Sidebar_Content } from '@src/component/sidebar'
import { Navbar, NavbarBrand, NavbarRight } from '@src/component/navbar'
import { Overlay } from '@src/component/overlay'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faTag, faHome, faUser, faUserFriends, faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons'


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
            <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
  

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            sidebarStatus : true
        }

        this.handleSidebarClick = this.handleSidebarClick.bind(this)
    }

    componentDidMount(){
        if(this.state.sidebarStatus){
            this.hideOverlay()
        } 
    }
    
    handleSidebarClick(){
        this.setState({
            sidebarStatus: !this.state.sidebarStatus
        },()=>{
            if(this.state.sidebarStatus){
                this.hideOverlay()
            }else{
                this.showOverlay()
            }
        });
    }

    handleOverlayClick($params){
        this.setState({
            sidebarStatus: !$params
        },()=>{
            this.hideOverlay()
        });
    }

    showOverlay(){
        document.body.classList.remove('sidebar-mini')
        setTimeout(
            function(){ 
                $('body #main .wrapper .sidebar .sidebar-title span').show()
                $('body #main .wrapper .sidebar .sidebar-content ul li span').show()
            },    
            150
        )
    }

    hideOverlay(){
        $('body #main .wrapper .sidebar .sidebar-title span').hide()
        $('body #main .wrapper .sidebar .sidebar-content ul li span').hide()
        setTimeout(
            function(){
                document.body.classList.add('sidebar-mini') 
            },
            100
        )
    }

        

    render(){
        const {sidebarStatus} = this.state
        const routes = bundle.routes
        return (
            <Router>
                <div className="wrapper">
                    {/* Overlay */}
                    <Overlay click={ ()=> {this.handleOverlayClick()} }/>


                    {/* Sidebar */}
                    <Sidebar active={sidebarStatus}>
                        <Sidebar_Logo 
                            firstName={bundle.brand.firstName} 
                            lastName={bundle.brand.lastName} />
                        <Sidebar_Content menu={bundle.sidebar} />
                    </Sidebar>
                    
    
                    {/* Content */}
                    <div className="content">
                        

                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-transparent head-navbar">
                            <a className="navbar-brand" href="#" onClick={ ()=> {this.handleSidebarClick(sidebarStatus)} }>
                                <FontAwesomeIcon icon={faBars}/>
                            </a>
    
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="pr-2"><FontAwesomeIcon icon={faBell} className="fa-fw" /></span>
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-right notification" aria-labelledby="navbarDropdown">
                                        <h5 className="dropdown-item title">Notification</h5>
                                        <div className="dropdown-divider"></div>
                                        <div className="dropdown-item" href="#">
                                            <div className="notification-title">
                                                <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                                                <span className="mr-2">Septian</span>
                                                <span className="float-right">20 Juni 2019</span>
                                            </div>
                                            <div className="notification-body">
                                                <p>
                                                    Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                                    and get error message  "area code already set"     
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dropdown-item" href="#">
                                            <div className="notification-title">
                                                <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                                                <span className="mr-2">Septian</span>
                                                <span className="float-right">20 Juni 2019</span>
                                            </div>
                                            <div className="notification-body">
                                                <p>
                                                    Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                                    and get error message  "area code already set"     
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dropdown-item" href="#">
                                            <div className="notification-title">
                                                <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                                                <span className="mr-2">Septian</span>
                                                <span className="float-right">20 Juni 2019</span>
                                            </div>
                                            <div className="notification-body">
                                                <p>
                                                    Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                                    and get error message  "area code already set"     
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dropdown-item" href="#">
                                            <div className="notification-title">
                                                <span className="mr-2 badge"><FontAwesomeIcon icon={faTag} className="fa-fw mr-2"/>Toserba Yogya</span>
                                                <span className="mr-2">Septian</span>
                                                <span className="float-right">20 Juni 2019</span>
                                            </div>
                                            <div className="notification-body">
                                                <p>
                                                    Issue  :  -  issue   : if run "  php bin/magento catalog:image:resize"     
                                                    and get error message  "area code already set"     
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faUser} className="fa-fw mr-3" />
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-right account" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Profile</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#"><span className="btn btn-danger btn-block">Logout</span></a>
                                    </div>
                                </li>
                            </ul>
                        </nav>


                        <div className="inner-content">
                            <Switch>
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App