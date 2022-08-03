/**
 * Regularly import this file on either server or client and have fun with it.
 * DO NOT PUT SENSITIVE INFORMATION LIKE ACCESS DATA HERE, THIS FILE MIGHT BE BUNDLED TO THE CLIENT!
 * Instead put it in an env file and use dotenv to access it on the server.
 */
require('dotenv').config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// define all environments you expect here
const allSiteCodes = ['1','2','3','4','5','6']

const getPortalUrl = () => {
    if(process.env.REACT_APP_SITE == 1) return "https://startup.99x.network"
    if(process.env.REACT_APP_SITE == 3) return "https://design.99x.network"
    if(process.env.REACT_APP_SITE == 5) return "https://seo.99x.network"
    if(process.env.REACT_APP_SITE == 6) return "https://social.99x.network"
    return "https://startup.99x.network"
}

const environments = {
    // _:{
    //     PUBLIC_URL:"",
    //     NETWORK_SITES:{
    //         STARTUP:{
    //             URL:""
    //         },
    //         CONTENT:{
    //             URL:""
    //         },
    //         DESIGN:{
    //             URL:""
    //         },
    //         SEO:{
    //             URL:""
    //         }
    //     },
    //     CDN:{
    //         BASE_URL:""
    //     },
    //     API:{
    //         BASE_URL:""
    //     },
    //     PAYMENTS:{
    //         STRIPE:{
    //             PUBLISHABLE_KEY:"",
    //         },
    //         PAYPAL:{
    //             TEST_MODE:true,
    //             CLIENT_ID:""
    //         },
    //         RP:{
    //             ENABLED: true,
    //             key:""
    //         }
    //     },
    //     SERVICES:{
    //         AGORA:{
    //             APP_ID:""
    //         },
    //         CALL:{
    //             BASE_URL:""
    //         }
    //     }
    // },

    _:{
        PUBLIC_URL:"http://99xstartup.local",
        PORTAL_URL: getPortalUrl(),
        CURRENT_SITE: parseInt(allSiteCodes.includes(process.env.REACT_APP_SITE) ? process.env.REACT_APP_SITE:1),
        SITES:{
            X99_STARTUP: 1,
            X99_CONTENT: 2,
            X99_DESIGN: 3,
            X99_STUDIO: 4,
            X99_SEO: 5,
            X99_SOCIAL: 6
        },
        NETWORK_SITES:{
            STARTUP:{
                CODE: 1,
                WEB:"http://99xstartup.local",
                PORTAL:"http://startup.99x.local",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/startup/revised/logo/New_99XStartup_Logo_kS41_r-Y_.svg",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/startup/99xStartup_white_uUGDgdALbr.png",
                },
            },
            CONTENT:{
                CODE: 2,
                WEB:"http://99xcontent.local",
                PORTAL:"http://content.99x.local"
            },
            DESIGN:{
                CODE: 3,
                WEB:"http://99xdesign.local",
                PORTAL:"http://design.99x.local",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/design/logo_yIGWHRIX0.png?updatedAt=1604299631933",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/design/_new/99xDesign_XiucZFyrp.png",
                },
            },
            STUDIO:{
                CODE: 4,
                WEB:"http://99xstudio.local",
                PORTAL:"http://studio.99x.local"
            },
            SEO:{
                CODE: 5,
                WEB:"http://99xseo.local",
                PORTAL:"http://seo.99x.local",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/seo/99xSEO_Logo_SWII60c0b.svg",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/seo/99x_SEO_KfzW1JZdv.png",
                }   
            },
            SOCIAL:{
                CODE: 6,
                WEB:"http://99xsocial.local",
                PORTAL:"http://social.99x.local",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/social/Logo_JEnEJpnWl.svg",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/social/Logo_KfLcU6HUD.png",
                }
            }
        },
        CDN:{
            BASE_URL:""
        },
        API:{
            BASE_URL:"https://api.99x.network" // api.99x.network
        },
        PAYMENTS:{
            STRIPE:{
                // PUBLISHABLE_KEY:"pk_test_51H22e7GVvBC62DxnH701rqmV3EW6vxFVSQTTpNPEao159w4J3gxFrgAvBvbRuykgthSwz0QgBTRtMfThrS177KXw00xaYNe4b8",
                PUBLISHABLE_KEY:"pk_live_51H22e7GVvBC62DxnglCojNUE2eSGHiwVFmG1PGTrDMjvIENb6ECyTjLrFrcQMWJwYF0X7wpGLaus8q1i41FRXlGB004fHqa464",
            },
            PAYPAL:{
                TEST_MODE:false,
                //CLIENT_ID:"AQQtZWOhwmNTOcUoxEXi0a3-qCBeGEcmi0JHmfw2eHXp-3-FAsuytDGkyXXPjM2Ft38Z6oE9KyUWVmGK"
                CLIENT_ID:"AT_nRKjJStvdIIXgn6LT-8CFnse1Tim6qhtSTJevVR9lnuIda87NcEybkE2eVMPB4QrIN3LBi1C6vBzO"
            },
            RP:{
                ENABLED: true,
                //key:"rzp_test_u5biqry9g2TMl7"
                key:"rzp_live_iQhjceZ8Cm84rx"
            }
        },
        SERVICES:{
            AGORA:{
                APP_ID:"7293a2e1da7d4cbf82fefa8e17d8396a"
            },
            CALL:{
                BASE_URL:"http://meet.99x.local"
            }
        }
    },

    "prod":{
        PUBLIC_URL:"https://99xstartup.com",
        PORTAL_URL: getPortalUrl(),
        CURRENT_SITE: parseInt(allSiteCodes.includes(process.env.REACT_APP_SITE) ? process.env.REACT_APP_SITE:1),
        SITES:{
            X99_STARTUP: 1,
            X99_CONTENT: 2,
            X99_DESIGN: 3,
            X99_STUDIO: 4,
            X99_SEO: 5,
            X99_SOCIAL: 6
        },
        NETWORK_SITES:{
            STARTUP:{
                CODE: 1,
                WEB:"https://99xstartup.com",
                PORTAL:"https://startup.99x.network",
                THEME_COLOR:"",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/startup/revised/logo/New_99XStartup_Logo_kS41_r-Y_.svg",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/startup/99xStartup_white_uUGDgdALbr.png",
                },
            },
            CONTENT:{
                CODE: 2,
                WEB:"https://99xcontent.com",
                PORTAL:"https://content.99x.network"
            },
            DESIGN:{
                CODE: 3,
                WEB:"https://99xdesign.com",
                PORTAL:"https://design.99x.network"
            },
            STUDIO:{
                CODE: 4,
                WEB:"https://99xstudio.com",
                PORTAL:"https://studio.99x.network"
            },
            SEO:{
                CODE: 5,
                WEB:"https://99xseo.com",
                PORTAL:"https://seo.99x.network",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/seo/99xSEO_Logo_SWII60c0b.svg",
                    LOGO_URL_WHITE:"https://ik.imagekit.io/99x/seo/99x_SEO_KfzW1JZdv.png",
                }   
            },
            SOCIAL:{
                CODE: 6,
                WEB:"https://99xsocial.com",
                PORTAL:"https://social.99x.network",
                SETTINGS:{
                    LOGO_URL:"https://ik.imagekit.io/99x/social/Logo_JEnEJpnWl.svg",
                    LOGO_URL_WHITE:"",
                }
            }
        },
        CDN:{
            BASE_URL:""
        },
        API:{
            BASE_URL:"https://api.99x.network"
        },
        PAYMENTS:{
            STRIPE:{
                PUBLISHABLE_KEY:"pk_live_51H22e7GVvBC62DxnglCojNUE2eSGHiwVFmG1PGTrDMjvIENb6ECyTjLrFrcQMWJwYF0X7wpGLaus8q1i41FRXlGB004fHqa464",
            },
            PAYPAL:{
                TEST_MODE:false,
                CLIENT_ID:"AT_nRKjJStvdIIXgn6LT-8CFnse1Tim6qhtSTJevVR9lnuIda87NcEybkE2eVMPB4QrIN3LBi1C6vBzO"
            },
            RP:{
                ENABLED: true,
                key:"rzp_live_iQhjceZ8Cm84rx"
            }
        },
        SERVICES:{
            AGORA:{
                APP_ID:"7293a2e1da7d4cbf82fefa8e17d8396a"
            },
            CALL:{
                BASE_URL:"http://meet.99xapps.com"
            }
        }
    },

};

// could be imported by the client or the server
const env = (typeof window !== "undefined" ? window.ENV : process.env.WILD_ENV) || "development";
// console.log("ENV", environments[env.toLowerCase()]);

// module.exports = environments[env.toLowerCase()];
// module.exports = environments[process.env.APPLICATION_MODE];

const getEnv = () => {

    const DeployEnvironment = process.env.REACT_APP_DEPLOYMENT_MODE || "_";
    
    console.log(`Application Environment: ${DeployEnvironment}`)
    return DeployEnvironment;


	// switch (process.env.NODE_ENV) {
	// 	case 'development':
	// 		return "_"
	// 	case 'production':
	// 		return "prod"
	// 	case 'test':
	// 		return "_"
	// 	default:
    //         return "prod"
	// 		break;
    // }
    

}


module.exports = environments[getEnv()];
