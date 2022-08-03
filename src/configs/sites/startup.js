import React from 'react';

const Home = React.lazy(() => import('../../views/home'));
const Product = React.lazy(() => import('../../views/product'));
const HowItWorks = React.lazy(() => import('../../views/howItWorks'));
const ContactPage = React.lazy(() => import('../../views/contact'));

const EnterprisePlan = React.lazy(() => import('../../views/enterprisePlan'));
const PricingPlan = React.lazy(()=>import('../../views/pricing/subscription'))

const Checkout = React.lazy(() => import('../../views/checkout'));
const CheckoutPayment = React.lazy(() => import('../../views/checkout/payment'));

const GetADemo = React.lazy(() => import('../../views/get-a-demo'));

const Login = React.lazy(() => import("../../views/ab/account-security/login"))
const ThankYou = React.lazy(() => import("../../views/thank-you"))
const OurWork = React.lazy(()=>import("../../views/our-work"))

const AllAccessPass = React.lazy(()=>import("../../views/all-access-pass"))
const AllAccessDesign = React.lazy(()=>import("../../views/all-access/design"))
const AllAccessDigital = React.lazy(()=>import("../../views/all-access/digital"))
const AllAccessStudio = React.lazy(()=>import("../../views/all-access/studio"))
const AllAccessTech = React.lazy(()=>import("../../views/all-access/tech"))

const NotFound = React.lazy(()=> import("../../views/404"))

const PricingOnDemand = React.lazy(() => import("../../views/pricing/on-demand"))
const PricingSubscription = React.lazy(() => import("../../views/pricing/subscription"))

const CreatorsPage = React.lazy(() => import("../../views/creators"))
const BrandsPage = React.lazy(() => import("../../views/brands"))

const Category_DigitalMarketing = React.lazy(() => import("../../views/category/digital-marketing"))
const Category_GraphicsPage = React.lazy(() => import("../../views/category/graphics"))
const Category_ContentPage = React.lazy(() => import("../../views/category/content"))
const Category_TechPage = React.lazy(() => import("../../views/category/tech"))
const Category_SeoPage = React.lazy(() => import("../../views/category/seo"))
const Category_SocialMediaPage = React.lazy(() => import("../../views/category/social-media"))
const Category_UiUx = React.lazy(() => import("../../views/category/ui-ux"))
const Category_WebDev = React.lazy(() => import("../../views/category/web-dev"))
const Category_MobileAppDev = React.lazy(() => import("../../views/category/mobile-app-dev"))

const Category_CXOMarketing = React.lazy(() => import("../../views/category/cxo-marketing"))
const Category_VideoPage = React.lazy(() => import("../../views/category/video"))
const Category_AritcleNBlogs = React.lazy(() => import("../../views/category/article-and-blogs"))
const Category_ContentAndCopy = React.lazy(() => import("../../views/category/content-and-copywriting"))
const Category_ASOy = React.lazy(() => import("../../views/category/app-search"))

const OnDemand_PitchDeck = React.lazy(() => import("../../views/product/onDemand/pitch-deck"))
const OnDemand_Video = React.lazy(() => import("../../views/product/onDemand/video"))
const OnDemand_Stationary= React.lazy(() => import("../../views/product/onDemand/stationary"))
const OnDemand_LogoDesign = React.lazy(() => import("../../views/product/onDemand/logo-design"))
const OnDemand_BrandStyleguide = React.lazy(() => import("../../views/product/onDemand/brand-style"))

const OnDemand_OneDollar = React.lazy(() => import("../../views/product/onDemand/_"))

const AboutUs_Page = React.lazy(()=>import("../../views/about-us"))
const Legal_PrivacyPolicy = React.lazy(()=>import("../../views/terms"))
const Legal_Terms = React.lazy(()=>import("../../views/privacy-policy"))

const routes = [
    {
        path: '/not-found',
        exact: true,
        name: 'Not Found',
        component: NotFound
    },
    {
        path: '/about',
        exact: true,
        name: 'About Page',
        component: AboutUs_Page
    },
    {
        path: '/p/privacy-policy',
        exact: true,
        name: 'Privacy Policy',
        component: Legal_PrivacyPolicy
    },
    {
        path: '/p/terms',
        exact: true,
        name: 'Terms & Conditions',
        component: Legal_Terms
    },
    {
        path: '/contact',
        exact: true,
        name: 'Contact Us',
        component: ContactPage
    },
    {
        path: '/all-access/design',
        exact: true,
        name: '',
        component: AllAccessDesign
    },
    {
        path: '/all-access/digital',
        exact: true,
        name: '',
        component: AllAccessDigital
    },
    {
        path: '/all-access/tech',
        exact: true,
        name: '',
        component: AllAccessTech
    },
    {
        path: '/all-access/studio',
        exact: true,
        name: '',
        component: AllAccessStudio
    },
    {
        path: '/on-demand/one-dollar',
        exact: true,
        name: 'Ondemand OneDollar',
        component: OnDemand_OneDollar
    },
    {
        path: '/on-demand/logo-design',
        exact: true,
        name: 'Ondemand LogoDesign',
        component: OnDemand_LogoDesign
    },
    {
        path: '/on-demand/brand-style',
        exact: true,
        name: 'Ondemand BrandStyleGuide',
        component: OnDemand_BrandStyleguide
    },
    {
        path: '/on-demand/pitch-deck',
        exact: true,
        name: 'Ondemand PitchDeck',
        component: OnDemand_PitchDeck
    },
    {
        path: '/on-demand/stationary',
        exact: true,
        name: 'Ondemand Stationary',
        component: OnDemand_Stationary
    },
    {
        path: '/on-demand/videos',
        exact: true,
        name: 'Ondemand Video',
        component: OnDemand_Video
    },
    {
        path: '/c/digital-marketing',
        exact: true,
        name: 'Digital Marketing',
        component: Category_DigitalMarketing
    },
    {
        path: '/c/ui-ux',
        exact: true,
        name: 'UI and UX',
        component: Category_UiUx
    },
    {
        path: '/c/seo',
        exact: true,
        name: 'SEO',
        component: Category_SeoPage
    },
    {
        path: '/c/aso',
        exact: true,
        name: 'ASO',
        component: Category_ASOy
    },
    {
        path: '/c/cxo-marketing',
        exact: true,
        name: 'Category_CXOMarketing',
        component: Category_CXOMarketing
    },
    {
        path: '/c/video',
        exact: true,
        name: 'Category_VideoPage',
        component: Category_VideoPage
    },
    {
        path: '/c/article-and-blogs',
        exact: true,
        name: 'Category_AritcleNBlogs',
        component: Category_AritcleNBlogs
    },
    {
        path: '/c/content-all',
        exact: true,
        name: 'Category_ContentAndCopy',
        component: Category_ContentAndCopy
    },
    {
        path: '/c/web-dev',
        exact: true,
        name: 'Web Development',
        component: Category_WebDev
    },
    {
        path: '/c/mobile-app-dev',
        exact: true,
        name: 'Mobile App Dev',
        component: Category_MobileAppDev
    },
    {
        path: '/c/social-media',
        exact: true,
        name: 'Social Media',
        component: Category_SocialMediaPage
    },
    {
        path: '/c/graphic-design',
        exact: true,
        name: 'Digital Marketing',
        component: Category_GraphicsPage
    },
    {
        path: '/c/content',
        exact: true,
        name: 'Digital Marketing',
        component: Category_ContentPage
    },
    {
        path: '/c/tech',
        exact: true,
        name: 'Digital Marketing',
        component: Category_TechPage
    },
    {
        path: '/pricing/on-demand',
        exact: true,
        name: 'PricingOnDemand',
        component: PricingOnDemand
    },
    {
        path: '/pricing/subscription',
        exact: true,
        name: 'PricingSubscription',
        component: PricingSubscription
    },
    // {
    //     path: '/category/:id',
    //     exact: true,
    //     name: 'CategoryChild',
    //     component: CategoryChild
    // },
    {
        path: '/services/:id',
        exact: true,
        name: 'Product',
        component: Product
    },
    {
        path: '/how-it-works',
        exact: true,
        name: 'How It Works',
        component: HowItWorks
    },
    {
        path: '/our-work',
        exact: true,
        name: 'Our Work',
        component: OurWork
    },
    {
        path: '/all-access-pass',
        exact: true,
        name: 'All Access Pass',
        component: AllAccessPass
    },
    {
        path: '/enterprise-plan',
        exact: true,
        name: 'Enterprise Plan',
        component: EnterprisePlan
    },
    {
        path: '/plans',
        exact: true,
        name: 'Plans',
        component: PricingPlan
    },
    {
        path: '/plans/:slug',
        exact: true,
        name: 'Plans',
        component: PricingPlan
    },
    {
        path: '/checkout/payment',
        exact: true,
        name: 'Checkout Payment',
        component: CheckoutPayment
    },
    {
        path: '/checkout',
        exact: true,
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/get-a-demo',
        exact: true,
        name: 'Get a Demo',
        component: GetADemo
    },
    {
        path: '/thank-you',
        exact: true,
        name: 'Thanks You',
        component: ThankYou
    },
   
    {
        path: '/creators',
        exact: true,
        name: 'Creators',
        component: CreatorsPage
    },
    {
        path: '/brands',
        exact: true,
        name: 'Brands',
        component: BrandsPage
    },
   
    
];

export default routes