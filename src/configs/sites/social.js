import React from 'react';

const Home = React.lazy(() => import('../../views/_social'));

const HowItWorks = React.lazy(() => import('../../views/_social/howItWorks'));
const ContactPage = React.lazy(() => import('../../views/_social/contact'));

const EnterprisePlan = React.lazy(() => import('../../views/_social/enterprisePlan'));

const Checkout = React.lazy(() => import('../../views/_social/checkout'));
const CheckoutPayment = React.lazy(() => import('../../views/_social/checkout/payment'));

const GetADemo = React.lazy(() => import('../../views/_social/get-a-demo'));
const ThankYou = React.lazy(() => import("../../views/_social/thank-you"))

const NotFound = React.lazy(()=> import("../../views/_social/_error_pages/404"))

const Category_SMM = React.lazy(() => import("../../views/_social/category/social-media-marketing"))
const Category_SMMG = React.lazy(() => import("../../views/_social/category/social-media-management"))
const Category_YTM = React.lazy(() => import("../../views/_social/category/youtube-marketing"))

const OnDemand_Skeleton = React.lazy(() => import("../../views/_social/on-demand/_"))

const AboutUs_Page = React.lazy(()=>import("../../views/_social/about-us"))
const Legal_PrivacyPolicy = React.lazy(()=>import("../../views/_social/terms"))
const Legal_Terms = React.lazy(()=>import("../../views/_social/privacy-policy"))

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
        path: '/c/social-media-marketing',
        exact: true,
        name: 'Social Media Marketing',
        component: Category_SMM
    },
    {
        path: '/c/social-media-management',
        exact: true,
        name: 'Social Media Management',
        component: Category_SMMG
    },
    {
        path: '/c/youtube-marketing',
        exact: true,
        name: 'Youtube Marketing',
        component: Category_YTM
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