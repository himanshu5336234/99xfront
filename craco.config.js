/* craco.config.js */
const path = require(`path`);
const SiteCode = process.env.REACT_APP_SITE


let SiteTheme = `./assets/scss/themes/startup.scss`;

if(SiteCode == 1){
  require('dotenv').config({ path: '.env.startup' })
}

if(SiteCode == 3){
  require('dotenv').config({ path: '.env.design' })
  SiteTheme = "./assets/scss/themes/design.scss"
}
if(SiteCode == 4){
  require('dotenv').config({ path: '.env.studio' })
  SiteTheme = "./assets/scss/themes/design.scss"
}

if(SiteCode == 5){
  require('dotenv').config({ path: '.env.seo' })
  SiteTheme = "./assets/scss/themes/seo.scss"
}

if(SiteCode == 6){
  require('dotenv').config({ path: '.env.social' })
  SiteTheme = "./assets/scss/themes/social.scss"
}

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets':"./assets",
      '@SITE_THEME': SiteTheme
    }
  },
};