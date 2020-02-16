/**
 * ==============================================
 * @category   CategoryName
 * @package    PackageName
 * @author     Sendika
 * @copyright  2020 Sendika Indonesia
 * @version    1.0
 * ==============================================
 */


 
import React,{Component, Fragment} from 'react'
import { BrowserRouter as Router} from "react-router-dom";

import { bundle, data } from '@src/interfaces'
import { Routes } from '@src/routes'

import logo from '@src/assets/img/logo_fixed.png'
import logo_white from '@src/assets/img/logo_fixed_white.png'
import { Sidebar, Sidebar_Content, Sidebar_SingleMenu } from '@src/component/sidebar'
import { QuickTools, QuickToolsBody, QuickToolsCaption } from '@src/component/quicktools'
import { Navbar, NavbarBrand, NavbarRight, NavbarLink} from '@src/component/navbar'
import { Media, MediaBody } from '@src/component/media'
import { Overlay } from '@src/component/overlay'


  

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            laoding: true,
            activeRoute : 0,
            sidebarStatus : true,
            quickToolsStatus : false
        }
    }

    handleSidebarClick(){
        this.setState({
            sidebarStatus: !this.state.sidebarStatus
        },()=>{
            if(this.state.sidebarStatus){
                this.f_hideSideBar()
            }else{
                this.f_showSideBar()
            }
        });
    }

    handleOverlayClick($params){
        this.setState({
            sidebarStatus: !$params
        },()=>{
            this.f_hideSideBar()
        });
    }

    handleQuickToolsClick(){
        this.setState({
            quickToolsStatus: !this.state.quickToolsStatus
        },()=>{
            if(this.state.quickToolsStatus){
                $('.quick-tools').fadeIn().promise().done( function(){
                    $( ".quick-tools" ).addClass('open')
                })
            }
            else{
                $( ".quick-tools" ).removeClass('open').promise().done( function(){
                    $( ".quick-tools" ).fadeOut()
                })
            }
        });
    }

    f_hideSideBar(){
        $('.overlay').fadeOut().promise().done( function(){
            $( "body" ).removeClass('expand')
        })
    }

    f_showSideBar(){
        $( "body" ).addClass('expand').promise().done( function(){
            $('.overlay').fadeIn()
        })
    }

    render(){
        const {sidebarStatus, quickToolsStatus, activeRoute} = this.state
        const requestTimeOff = data.quick_tools.request_time_off;
        const companysEvents = data.quick_tools.companys_events;

        return (
            <Fragment>
                <Router>
                
                    {/* Overlay */}
                    <Overlay click={ ()=> {this.handleOverlayClick()} }/>


                    {/* Sidebar */}
                    <Sidebar active={sidebarStatus}>
                        <Sidebar_Content >
                            {bundle.sidebar.map((data, key)=>{
                                return <Sidebar_SingleMenu 
                                    key={key}
                                    i={key}
                                    active={activeRoute} 
                                    url={data.link} 
                                    icon={data.icons}
                                    onclick={ ()=>{ this.setState({ activeRoute: key }) }}
                                    
                                    >{data.label}</Sidebar_SingleMenu>
                            })}
                        </Sidebar_Content>
                    </Sidebar>
                    
                    {/* Quick Tools */}
                    <QuickTools close={() => this.handleQuickToolsClick()}>
                        { requestTimeOff.map( (data, key) => {
                            return(
                                <Fragment key={key}>
                                    <QuickToolsCaption label={data.label} icon={data.icons}/>
                                    <QuickToolsBody>
                                    { data.items.map( (data, key)=>{
                                        return(
                                            <Media key={key}>
                                                <MediaBody style={['align-self-end']}>
                                                    <h6 className="mb-0">{data.name}</h6>
                                                    <small>{data.start_date}</small> - <small>{data.end_date}</small>
                                                </MediaBody>
                                            </Media>
                                        )
                                    }) }
                                    </QuickToolsBody>
                                </Fragment>
                            )
                        }) }
                        { companysEvents.map( (data, key) => {
                            return(
                                <Fragment key={key}>
                                    <QuickToolsCaption label={data.label} icon={data.icons}/>
                                    <QuickToolsBody>
                                    { data.items.map( (data, key)=>{
                                        return(
                                            <Media key={key}>
                                                <MediaBody style={['align-self-end']}>
                                                    <h6 className="mb-0">{data.name}</h6>
                                                    <small>{data.start_date}</small> - <small>{data.end_date}</small>
                                                </MediaBody>
                                            </Media>
                                        )
                                    }) }
                                    </QuickToolsBody>
                                </Fragment>
                            )
                        }) }
                    </QuickTools>

                    {/* Content */}
                    <div className="content">
                        

                        {/* Navbar */}
                        <Navbar>
                            <NavbarBrand active={sidebarStatus} click={()=>{this.handleSidebarClick(sidebarStatus)}}>
                                <picture>
                                    <source srcSet={logo_white} media="(max-width: 640px)" />
                                    <source srcSet={logo} media="(min-width: 640px)" />
                                    <img srcSet={logo} className="logo"/>
                                </picture>
                            </NavbarBrand>

                            <NavbarRight>
                                {bundle.navbar.map((data, key)=>{
                                    return(
                                        <NavbarLink url={data.link} key={key} icon={data.icons}
                                            click={key + 1 === 2 ? ()=>this.handleQuickToolsClick(!quickToolsStatus) : null}
                                        />
                                    )
                                })} 
                            </NavbarRight>
                        </Navbar>

                        <div className="inner-content">
                            {/* Routing */}
                            <Routes/>

                        </div>
                    </div>
                </Router>
            </Fragment>
        );
    }
}


export default App