import React from 'react';

const Home = React.lazy(() => import('../../views/_design'));

const HowItWorks = React.lazy(() => import('../../views/_design/howItWorks'));
const ContactPage = React.lazy(() => import('../../views/_design/contact'));

const EnterprisePlan = React.lazy(() => import('../../views/_design/enterprisePlan'));

const Checkout = React.lazy(() => import('../../views/_design/checkout'));
const CheckoutPayment = React.lazy(() => import('../../views/_design/checkout/payment'));

const GetADemo = React.lazy(() => import('../../views/_design/get-a-demo'));
const ThankYou = React.lazy(() => import("../../views/_design/thank-you"))
const OurWork = React.lazy(()=>import("../../views/_design/our-work"))

const NotFound = React.lazy(()=> import("../../views/_design/_error_pages/404"))

const Category_GraphicDesign = React.lazy(() => import("../../views/_design/category/graphic-design"))
const Category_UIUX = React.lazy(() => import("../../views/_design/category/ui-ux"))

const OnDemand_Skeleton = React.lazy(() => import("../../views/_design/on-demand/_"))

const AllAccessDesign = React.lazy(()=>import("../../views/all-access/design"))

const AboutUs_Page = React.lazy(()=>import("../../views/_design/about-us"))
const Legal_PrivacyPolicy = React.lazy(()=>import("../../views/_design/terms"))
const Legal_Terms = React.lazy(()=>import("../../views/_design/privacy-policy"))

const routes = [
    {
        path: '/our-work',
        exact: true,
        name: 'Our Work',
        component: OurWork
    },
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
        path: '/all-access/design',
        exact: true,
        name: '',
        component: AllAccessDesign
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
    // {
    //     path: '/on-demand/one-dollar',
    //     exact: true,
    //     name: 'Ondemand OneDollar',
    //     component: OnDemand_OneDollar
    // },
    {
        path: '/on-demand/:slug',
        name: 'Ondemand Services',
        component: OnDemand_Skeleton
    },
    {
        path: '/c/graphic-design',
        exact: true,
        name: 'Graphic Design',
        component: Category_GraphicDesign
    },
    {
        path: '/c/ui-ux',
        exact: true,
        name: 'UI & UX',
        component: Category_UIUX
    },
    {
        path: '/how-it-works',
        exact: true,
        name: 'How It Works',
        component: HowItWorks
    },
    {
        path: '/enterprise-plan',
        exact: true,
        name: 'Enterprise Plan',
        component: EnterprisePlan
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
   
];

export default routes