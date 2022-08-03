import React, { useEffect, useRef } from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import W3SelectCurrency from '../w3select-currency/W3Select-Currency';
import MobileMenu from './mobile';
import ENV from "../../env.config";

import MegaMenu_SEO from "./sites/seo";
import MegaMenu_Startup from './sites/startup'
import MegaMenu_Social from './sites/social'
import MegaMenu_Design from './sites/design'

import './style.scss'
import DesktopMenu from './desktop';

function useOutsideAlerter(ref) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              // alert("You clicked outside of me!");
              console.log(ref.current)
              ref.current.style.display = '';
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

const W3SuperMenu = (props) => {

  const [wrapperRef1, wrapperRef2, wrapperRef3, wrapperRef4, wrapperRef5, wrapperRef6] = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
  useOutsideAlerter(wrapperRef1);
  useOutsideAlerter(wrapperRef2);
  useOutsideAlerter(wrapperRef3);
  useOutsideAlerter(wrapperRef4);
  useOutsideAlerter(wrapperRef5);
  useOutsideAlerter(wrapperRef6);

  const userMenuRef = useRef(null);
  useOutsideAlerter(userMenuRef);

  const menuItem = useRef();

  const w3_auth = localStorage.getItem("w3_auth") || localStorage.getItem("token");
  const loggedIn = w3_auth ? true:false;

  let user_mode = 1;
  if(localStorage.getItem("user_type") && localStorage.getItem("user_type") == "2") user_mode = 2 


  const ProfileMenuLinks = [
    {
      text:'For Creators',
      link:'/creators'
    },
    {
      text:'For Business',
      link:'/brands'
    },
    {
      text:'For Enterprise',
      link:'/enterprise-plan'
    },
    {
      text:'How it works',
      link:'/how-it-works'
    },
    {
      text:'Featured Works',
      link:'/'
    },
  ]

  let MegaMenuItems = []

  if(ENV.CURRENT_SITE == 1) MegaMenuItems = MegaMenu_Startup
  if(ENV.CURRENT_SITE == 3) MegaMenuItems = MegaMenu_Design
  if(ENV.CURRENT_SITE == 5) MegaMenuItems = MegaMenu_SEO
  if(ENV.CURRENT_SITE == 6) MegaMenuItems = MegaMenu_Social

  if(ENV.CURRENT_SITE != 1){
    ProfileMenuLinks.splice(0,2)
  }

  useEffect(()=>{

    let menuItem = document.querySelectorAll('[data-toggle="dropdown"]');
    menuItem.forEach(mi => {
      mi.addEventListener('click',function(e){
      
        //console.log(e.target)
        if(e.target.nextSibling) return 1 && (e.target.nextSibling.style.display = (e.target.nextSibling.style.display === "") ? 'block':'');
        if(e.target.parentElement.nextSibling) return (e.target.parentElement.nextSibling.style.display = (e.target.parentElement.nextSibling.style.display === "") ? 'block':'');

      })
    })
    // menuItem.current.addEventListener('click', function(e){
      
    //   //let x = e.querySelector(".dropdown-menu");
    //   console.log(e.target.nextSibling.style.display);
    //   e.target.nextSibling.style.display = (e.target.nextSibling.style.display === "") ? 'block':'';

    // })

  },[])

  return (    
    <>
    <nav className="site__menu desktop-only">
      
      <div class="navbar">
        <DesktopMenu 
        menu={MegaMenuItems}
        fx={props.fx}
        profile_links={ProfileMenuLinks}
        />
      </div>
      {/* <div class="navbar">
      
        <div class="navbar-inner">
          <ul class="nav nav-mega">


            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                Launch & Kickoff 
              </a>

              <ul class="dropdown-menu mega-menu" ref={wrapperRef1}>
                <li>
                  <div class="row-fluid">
                    <MediaList
                      link="/on-demand/pitch-deck"
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/pitch_deck_ZwpFXPXaN.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon1_white_YTOAmIG-cZu.svg"
                      title="Pitch Deck"
                      subtitle="High-quality pitchdesks and to impress your investors & stakeholders"
                    />
                    <MediaList
                      link="/on-demand/logo-design"
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/logo_design_LpkmSMU_2.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon2_white_DvB_1vJOQzg.svg"
                      title="Logo Design"
                      subtitle="Get your business a brand new logo or brand identity designed. "
                    />
                    <MediaList
                      link="/on-demand/stationary"
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/stationary_kit_bQXr0W0Z5M.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon3_white_w8SDuNx9y-.svg"
                      title="Stationery Kit"
                      subtitle="Show-off your business with stunning business cards & Stationery Kits. "
                    />
                    <MediaList
                      link="/on-demand/videos"
                      title="Promo Videos"
                      subtitle="Tell your business and product story with striking visuals & stunning videos!"
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/video_neyY0IrAOa.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon17_white_JCYOVsQFpb.svg"
                    />
                    <MediaList
                      link="/on-demand/brand-style"
                      title="Brand Styleguide"
                      subtitle="Tell your business and product story with striking visuals & stunning videos!"
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/video_neyY0IrAOa.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon17_white_JCYOVsQFpb.svg"
                    />
                  </div>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                Digital Marketing & SEO 
              </a>
              <ul class="dropdown-menu mega-menu" ref={wrapperRef2}>
                <li>
                  <div class="row-fluid">
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/digital_marketing_e0GAnJPD6.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon6_white_U7Af7aVo1d.svg"
                      title="Digital Marketing"
                      subtitle="Drive growth, revenue & more with holistic Digital Marketing Subscriptions "
                      link="/c/digital-marketing"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/social-media_q_8GTr69t.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon7_white_l9t_8Pi78Hj.svg"
                      title="Social Media"
                      subtitle="Scale your social media efforts with comprehensive Social media subscriptions"
                      link="/c/social-media"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/seo_LOQkxtDuX.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon8_white_SeZwi_neFh.svg"
                      title="SEO"
                      subtitle="Boost your SEO & Content Marketing efforts with holistic SEO subscriptions"
                      link="/c/seo"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/app_search_optimization_t_C8RRNKPV.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon9_white_SBwL516LvT.svg"
                      title="App Search Optimization"
                      subtitle="Drive more users to your mobile apps with ASO Plans"
                      link="/c/aso"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/digital_all_access_NY11cnUbh.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon10_white_n-eXMQCaVV8.svg"
                      title="Digital All Access"
                      subtitle="Save time, money big time with All access passes designed for your growth"
                      link="/all-access/digital"
                    />
                  </div>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                Graphics & UI/UX
              </a>
              <ul class="dropdown-menu mega-menu" ref={wrapperRef3}>
                <li>
                  <div class="row-fluid">
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/ui_ux_s0tkH_6yK1.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon11_white_FHfEZ9M9vf.svg"
                      title="UI-UX"
                      subtitle="Build Products that your users love with holistic UI/UX Subscription Plans"
                      link="/c/ui-ux"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/graphic_design_jWWefsoBW.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon12_white_lunO7ZLJ-4.svg"
                      title="Graphic Design"
                      subtitle="Connect, communicate, and engage better with flexible Graphic Design Plans"
                      link="/c/graphic-design"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/revised/menu/icon10_DyookXzviA.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon13_white_EiSt0UqjD_.svg"
                      title="Design All Access"
                      subtitle="Boost your online presence with All access passes designed for your growth "
                      link="/all-access/design"
                    />
                  </div>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                Content & Video
              </a>
              <ul class="dropdown-menu mega-menu" ref={wrapperRef4}>
                <li>
                  <div class="row-fluid">
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/articles_and_blogs_Sa_xPYvw6.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon14_white__kP7H1l-FR.svg"
                      title="Articles & Blogs"
                      subtitle="Get SEO optimized articles and blogs with holistic articles & blog subscriptions"
                      link="/c/article-and-blogs"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/cxo_marketing_SJqvSDEuM.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon15_white_VmV9Rn4sccE.svg"
                      title="CXO Marketing"
                      subtitle="Enhance your personal & professional brand on social media with  "
                      link="/c/cxo-marketing"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/all_in_one_content_and_copywriting_VQRD6CIN5.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon16_white_SiVoEOTsYL.svg"
                      title="All-in-one Content & Copywriting"
                      subtitle="Flexible Content Plans for all your content needs "
                      link="/c/content-all"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/video_essentials_Z0-0lFliR.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon17_white_JCYOVsQFpb.svg"
                      title="Video Essentials"
                      subtitle="Amplify your online presence with great videos and flexible video plans "
                      link="/c/video"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/video_all_access_f18bvj1Kx.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon18_white_Jkp-2hlytPN.svg"
                      title="Video All Access"
                      subtitle="Professionally edited videos of any duration of any type with All access passes."
                      link="/all-access/studio"
                    />
                  </div>
                </li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                Tech
              </a>
              <ul class="dropdown-menu mega-menu" ref={wrapperRef5}>
                <li>
                  <div class="row-fluid">
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/web_development_xo2vO5a6A.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon19_white_8M6993-J1v.svg"
                      title="Web Development"
                      subtitle="Build Robust Websites & Web Apps with holistic web development subscriptions"
                      link="/c/web-dev"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/mobile_app_dev_nTVx2RVQkV.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon20_white_Eo43ZvmtoGi.svg"
                      title="Mobile App Dev"
                      subtitle="Build scalable android/iOS apps with comprehensive mobile app dev plans"
                      link="/c/mobile-app-dev"
                    />
                    <MediaList
                      icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/tech_all_access_PnzK4TeNx.svg"
                      icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon21_white_m-ukmJOsF0.svg"
                      title="Tech All Access"
                      subtitle="Build & develop future ready applications with All access passes built for your growth  "
                      link="/all-access/tech"
                    />
                  </div>
                </li>
              </ul>
            </li>

            
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                All Access 
                <sup>PRO</sup>
              </a>
              <ul class="dropdown-menu mega-menu" ref={wrapperRef6}>
                <li>
                  <div class="row-fluid">
            
                  
                        <MediaList
                          icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/digital_all_access_NY11cnUbh.svg"
                          icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon10_white_n-eXMQCaVV8.svg"
                          title="Digital All Access"
                          subtitle="Save time, money big time with All access passes designed for your growth"
                          link="/all-access/digital"
                        />
                        <MediaList
                          icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/design_all_access_QafHrPel1.svg"
                          icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon13_white_EiSt0UqjD_.svg"
                          title="Design All Access"
                          subtitle="Boost your online presence with All access passes designed for your growth "
                          link="/all-access/design"
                        />
                        <MediaList
                          icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/tech_all_access_PnzK4TeNx.svg"
                          icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon21_white_m-ukmJOsF0.svg"
                          title="Tech All Access"
                          subtitle="Build & develop future ready applications with All access passes built for your growth  "
                          link="/all-access/tech"
                        />
                        <MediaList
                          icon="https://ik.imagekit.io/99x/startup/icons/megamenu/dm_and_sm/video_all_access_f18bvj1Kx.svg"
                          icon_selected="https://ik.imagekit.io/99x/startup/revised/menu/icon18_white_Jkp-2hlytPN.svg"
                          title="Video All Access"
                          subtitle="Professionally edited videos of any duration of any type with All access passes."
                          link="/all-access/studio"
                        />
                    
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <W3SelectCurrency
                fx={props.fx}
              />
            </li>

            <li>
              <NavLink exact to="/get-a-demo" className="btn-bordered weight-700 getademo">
                Get Demo
              </NavLink>      
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="https://ik.imagekit.io/99x/startup/icons/menu/Profile_S0_y_cQgn.png"/>                  
              </a>
              <ul className="dropdown-menu profile_submenu" ref={userMenuRef}>
                { loggedIn ? 
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

                    <hr/>
                  </li>
                </>
                }

                
                

                {ProfileMenuLinks.map((link, i)=>(
                  <li className={`profile_submenu-item ${i==0 ? 'mt-20':''}`} >
                    <NavLink to={link.link}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}

                <hr/>
                <li className="profile_submenu-item">
                    <NavLink to="/ab/account-security/login">
                      Support
                    </NavLink>
                </li>
                { loggedIn ? 
                <li className="profile_submenu-item">
                    <NavLink to="/" onClick={()=>{
                      localStorage.clear();
                      window.top.location.reload();
                    }}>
                      Logout
                    </NavLink>
                </li>
                :null}
              </ul>
            </li>

          </ul>
        </div>
      
      </div> */}

        
    </nav>
    <MobileMenu
      menu={MegaMenuItems}
      profile_menu={ProfileMenuLinks}
    />
    </>
    )
}

export default W3SuperMenu;