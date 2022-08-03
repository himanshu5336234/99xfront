import W3SelectCurrency from "components/w3select-currency/W3Select-Currency"
import React, {useState} from "react"
import ENV from "../../env.config"
import { NavLink } from "react-router-dom"
import MediaList from "./components/media-list"

const UserIcon = () => {
    if (ENV.CURRENT_SITE == 3) return "https://ik.imagekit.io/99x/design/_new/Profile_qErN30dSw9z.svg"
    if (ENV.CURRENT_SITE == 5) return "https://ik.imagekit.io/99x/social/Frame_961_BaXakTEzS.svg"
    if (ENV.CURRENT_SITE == 6) return "https://ik.imagekit.io/99x/social/Frame_961_1__lPxwoYGuo3.svg"
    return "https://ik.imagekit.io/99x/startup/icons/menu/Profile_S0_y_cQgn.png"
}

const ProfileMenu = (props) => {
    const w3_auth = localStorage.getItem("w3_auth") || localStorage.getItem("token");
    const loggedIn = w3_auth ? true : false;

    let user_mode = 1;
    if (localStorage.getItem("user_type") && localStorage.getItem("user_type") == "2") user_mode = 2

    return (
        <li class="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={UserIcon()} />
            </a>
            <ul className="dropdown-menu profile_submenu">
                {loggedIn ?
                    <>
                        <li className="profile_submenu-item">
                            <a href={`${ENV.PORTAL_URL}/?token=${w3_auth}&user_mode=${user_mode}`} target="_blank">
                                Profile
                            </a>
                        </li>
                        <li className="profile_submenu-item">
                            <a href={`${ENV.PORTAL_URL}/?token=${w3_auth}&user_mode=${user_mode}`} target="_blank">
                                Dashboard
                            </a>
                        </li>
                    </>
                    :
                    <>
                        <li className="profile_submenu-item account-section">
                            <NavLink to="/ab/account-security/login" className="join-now">
                                Join Now
                            </NavLink>
                        </li>
                        <li className="profile_submenu-item account-section">
                            <NavLink to="/ab/account-security/login" className="login">
                                Login
                            </NavLink>
                            <hr />
                        </li>
                    </>
                }




                {props.links.map((link, i) => (
                    <li className={`profile_submenu-item ${i == 0 ? 'mt-20' : ''}`} >
                        <NavLink to={link.link}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}

                <hr />
                <li className="profile_submenu-item">
                    <NavLink to="/ab/account-security/login">
                        Support
                    </NavLink>
                </li>
                {loggedIn ?
                    <li className="profile_submenu-item">
                        <NavLink to="/" onClick={() => {
                            localStorage.clear();
                            window.top.location.reload();
                        }}>
                            Logout
                        </NavLink>
                    </li>
                    : null}
            </ul>
        </li>
    )
}

export default function DesktopMenu(props) {

    let [activeMegaMenu, setActiveMegaMenu] = useState(null)
    let [activeMegaMenuIndex, setActiveMegaMenuIndex] = useState(0)

    if (ENV.CURRENT_SITE == 3) {
        return (
            <div class="navbar-inner">
                <ul class="nav nav-mega">

                    {props.menu.map((mi, i) => {

                        if (mi.megamenu) {

                            let activeSubmenu = activeMegaMenu || mi.megamenu[0].submenu

                            return (
                                <>
                                    <li className="dropdown design-menu">

                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                            {mi.title}
                                        </a>

                                        <ul className="dropdown-menu mega-menu">

                                            <li style={{display:"flex"}}>

                                                <ul className="megamenu-labels" style={{width:'250px'}}>
                                                    {mi.megamenu.map((m1,i)=>(
                                                        <li 
                                                        onClick={()=>{
                                                            setActiveMegaMenu(m1.submenu)
                                                            setActiveMegaMenuIndex(i)
                                                        }}
                                                        className={`${activeMegaMenuIndex == i ? 'active':null}`}
                                                        data-menu={`mm-${i}`}>
                                                            <img src={m1.icon}/>
                                                            <span>{m1.title}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <ul className="megamenu-active-menu" style={{width:'100%'}}>
                                                    <div className="row-fluid">
                                                        <ul>
                                                        <li className="mega-menu-grid">
                                                            {activeSubmenu.map((smi, i) => {

                                                                if(smi.href){
                                                                    return <img src={smi.icon} style={{width:'100%',height:'100%'}}/>
                                                                }

                                                                return (

                                                                    <MediaList
                                                                        icon={smi.icon}
                                                                        // icon_selected={smi.icon_hover}
                                                                        title={smi.title}
                                                                        subtitle={smi.subtitle}
                                                                        link={smi.link}
                                                                    />
                                                                )
                                                            })}
                                                        </li>
                                                        </ul>
                                                    </div>
                                                </ul>
                                            </li>
                                            </ul>

{/*                                         
                                        

                                        <ul className="dropdown-menu mega-menu">
                                            <li>
                                               
                                            </li>
                                        </ul> */}

                                    </li>
                                </>
                            )
                        }

                        if (mi.link) {
                            return (
                                <li className="normal-link">
                                    <NavLink to={mi.link}>
                                        {mi.title}
                                    </NavLink>
                                </li>
                            )
                        }

                    })}

                    <li>
                        <W3SelectCurrency
                            fx={props.fx}
                        />
                    </li>

                    <li>
                        <NavLink exact to="/get-a-demo" className={`btn-bordered weight-700 getademo demo-${ENV.CURRENT_SITE}`}>
                            Get Demo
                        </NavLink>
                    </li>

                    <ProfileMenu
                        links={props.profile_links}
                    />
                </ul>
            </div>
        )
    }
    return (
        <div class="navbar-inner">
            <ul class="nav nav-mega">

                {props.menu.map((mi, i) => {

                    if (mi.submenu) {
                        return (
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    {mi.title}
                                </a>

                                <ul className="dropdown-menu mega-menu">
                                    <li>
                                        <div className="row-fluid">
                                            {mi.submenu.map((smi, i) => {
                                                return (

                                                    <MediaList
                                                        icon={smi.icon}
                                                        // icon_selected={smi.icon_hover || smi.icon}
                                                        title={smi.title}
                                                        subtitle={smi.subtitle}
                                                        link={smi.link}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        )
                    }

                    if (mi.link) {
                        return (
                            <li className="normal-link">
                                <NavLink to={mi.link}>
                                    {mi.title}
                                </NavLink>
                            </li>
                        )
                    }

                })}

                <li>
                    <W3SelectCurrency
                        fx={props.fx}
                    />
                </li>

                <li>
                    <NavLink exact to="/get-a-demo" className={`btn-bordered weight-700 getademo demo-${ENV.CURRENT_SITE}`}>
                        Get Demo
                    </NavLink>
                </li>

                <ProfileMenu
                    links={props.profile_links}
                />
            </ul>
        </div>
    )

}