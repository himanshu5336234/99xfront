import React,{useEffect, useRef} from "react"
import Accordion from 'react-collapsy';
import { NavLink } from "react-router-dom";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                if(event.target.classList && event.target.classList.contains("burger-icon")) return true;
                document.querySelector(".site__menu_mobile-outer").classList.add("site__menu_mobile-outer--collapsed")
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
export default function MobileMenu(props){


    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const ProfileMenuLinks = props.profile_menu;
    const toggleMenu = () => {
        let burgerIcon =  document.querySelector(".site__menu_mobile-outer");
        return burgerIcon.classList.contains("site__menu_mobile-outer--collapsed") ? burgerIcon.classList.remove("site__menu_mobile-outer--collapsed"):burgerIcon.classList.add("site__menu_mobile-outer--collapsed")
    }

    return (
        <>
            <div className="site__menu_mobile-container mobile-only" > 
                <button onClick={()=>{
                   return toggleMenu()
                }}>
                    <img src="https://ik.imagekit.io/99x/startup/icons/menu/Hamburger_Menu_Jbm0uoq4n.svg" className="burger-icon"/>
                </button>
            </div>
            <div className="site__menu_mobile-outer site__menu_mobile-outer--collapsed mobile-only" ref={wrapperRef}>
                <div className="site__menu_mobile">
                    
                    {props.menu.map((m,index)=>{
                        if(m.submenu)
                        return (
                            <Accordion title={m.title}>
                                <ul>
                                {m.submenu.map((sm,i)=>(
                                    <li>
                                        {sm.href ? 
                                        <a href={`${sm.link || '/'}`}>
                                            <img src={sm.icon}/>
                                            <span className="title">{sm.title}</span>
                                        </a>
                                        :
                                            <NavLink to={`${sm.link || '/'}`} onClick={()=>{
                                                toggleMenu()
                                            }}>
                                                <img src={sm.icon}/>
                                                <span className="title">{sm.title}</span>
                                            </NavLink>
                                        }
                                    </li>
                                ))}
                                </ul>
                            </Accordion>
                        )

                        if(m.link)
                        return (
                            <>
                                <NavLink className="menu-link-direct" to={m.link}>
                                    {m.title}
                                </NavLink>
                            </>
                        )
                    })}
                    <hr/>

                    <ul className="profile_menu">
                    {ProfileMenuLinks.map((link, i)=>(
                        <li>
                            <NavLink to={link.link}>
                            {link.text}
                            </NavLink>
                        </li>
                    ))}
                    </ul>

                    <hr/>

                </div>
            </div>
        </>
    )
}