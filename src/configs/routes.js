import StartupRoutes from "./sites/startup"
import SeoRoutes from "./sites/seo"
import SocialRoutes from "./sites/social"
import DesignRoutes from "./sites/design"
import StudioRoutes from "./sites/studio"

import ENV from "../env.config"

let SiteRoute = StartupRoutes

let allSites = Object.keys(ENV.NETWORK_SITES)
.map(e=>{
	return ENV.NETWORK_SITES[e]
})
.map(c=>{return c.CODE})

if(allSites.includes(ENV.CURRENT_SITE)){

	switch(ENV.CURRENT_SITE){
		case ENV.NETWORK_SITES.STARTUP.CODE:
			SiteRoute = StartupRoutes
			break;
		case ENV.NETWORK_SITES.DESIGN.CODE:
			SiteRoute = DesignRoutes
			break;
		case ENV.NETWORK_SITES.SEO.CODE:
			SiteRoute = SeoRoutes
			break;
			case ENV.NETWORK_SITES.STUDIO.CODE:
			SiteRoute = StudioRoutes
			break;
		case ENV.NETWORK_SITES.SOCIAL.CODE:
			SiteRoute = SocialRoutes
			break;
		default:
			SiteRoute = StartupRoutes
	}

}    

console.log("ROUTES__X", SiteRoute)
export default SiteRoute;