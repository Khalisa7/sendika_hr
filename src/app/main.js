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
import { Navbar, NavbarBrand, NavbarRight, NavbarDropdown, NavbarNotification } from '@src/component/navbar'
import { Overlay } from '@src/component/overlay'


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
            laoding: true,
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
                $('body .sidebar .sidebar-title span').show()
                $('body .sidebar .sidebar-content ul li span').show()
            },    
            175
        )
    }

    hideOverlay(){
        $('body .sidebar .sidebar-title span').hide()
        $('body .sidebar .sidebar-content ul li span').hide()
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
                    <Navbar>
                        <NavbarBrand active={sidebarStatus} click={()=>{this.handleSidebarClick(sidebarStatus)}} />

                        <NavbarRight>
                            <NavbarNotification/>
                            <NavbarDropdown/>
                        </NavbarRight>
                    </Navbar>

                    <div className="inner-content">
                        <Switch>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App