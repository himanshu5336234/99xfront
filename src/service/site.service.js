import ENV from "../env.config"

const getActiveSiteSettings = () => {
    
    let activeSite = ENV.CURRENT_SITE;

    let allSites = Object.keys(ENV.NETWORK_SITES)
    .map(e=>{
        return ENV.NETWORK_SITES[e]
    })
    
    //let allSiteCode = allSites.map(c=>{return c.CODE})
    
    if(allSites[activeSite-1]){
        return allSites[activeSite-1].SETTINGS;
    }else{
        return null
    }
    
}

const getHomePageHeroBanner = () =>{
    if(ENV.CURRENT_SITE == ENV.NETWORK_SITES.SEO.CODE)
        return "https://ik.imagekit.io/99x/seo/Desktop_mLrKMaJ2F.png"
}

const getSiteTheme = () => {
    if(ENV.CURRENT_SITE == 1) return "startup"
    if(ENV.CURRENT_SITE == 2) return "startup"
    if(ENV.CURRENT_SITE == 3) return "design"
    if(ENV.CURRENT_SITE == 4) return "studio"
    if(ENV.CURRENT_SITE == 5) return "seo"
    if(ENV.CURRENT_SITE == 6) return "social"
    return "startup"
}

export default {
    getActiveSiteSettings,
    getHomePageHeroBanner,
    getSiteTheme
}