import React from 'react';

const Home = React.lazy(() => import('../../views/_studio'));













const routes = [
    // {
    //     path: '/not-found',
    //     exact: true,
    //     name: 'Not Found',
    //     component: NotFound
    // },
    // {
    //     path: '/about',
    //     exact: true,
    //     name: 'About Page',
    //     component: AboutUs_Page
    // },
    // {
    //     path: '/p/privacy-policy',
    //     exact: true,
    //     name: 'Privacy Policy',
    //     component: Legal_PrivacyPolicy
    // },
    // {
    //     path: '/p/terms',
    //     exact: true,
    //     name: 'Terms & Conditions',
    //     component: Legal_Terms
    // },
    // {
    //     path: '/contact',
    //     exact: true,
    //     name: 'Contact Us',
    //     component: ContactPage
    // },
    // {
    //     path: '/on-demand/one-dollar',
    //     exact: true,
    //     name: 'Ondemand OneDollar',
    //     component: OnDemand_OneDollar
    // },
    // {
    //     path: '/on-demand/:slug',
    //     name: 'Ondemand Services',
    //     component: OnDemand_Skeleton
    // },
    // {
    //     path: '/c/local-seo',
    //     exact: true,
    //     name: 'Digital Marketing',
    //     component: Category_LocalSeo
    // },
    // {
    //     path: '/c/link-building',
    //     exact: true,
    //     name: 'UI and UX',
    //     component: Category_LinkBuilding
    // },
    // {
    //     path: '/c/aso',
    //     exact: true,
    //     name: 'App Store Optimization',
    //     component: Category_ASO
    // },
    // {
    //     path: '/c/abs',
    //     exact: true,
    //     name: 'Articles & Blogs',
    //     component: Category_ABS
    // },
    // {
    //     path: '/c/seo',
    //     exact: true,
    //     name: 'SEO',
    //     component: Category_SeoPage
    // },
    // {
    //     path: '/how-it-works',
    //     exact: true,
    //     name: 'How It Works',
    //     component: HowItWorks
    // },
    // {
    //     path: '/enterprise-plan',
    //     exact: true,
    //     name: 'Enterprise Plan',
    //     component: EnterprisePlan
    // },
    // {
    //     path: '/checkout/payment',
    //     exact: true,
    //     name: 'Checkout Payment',
    //     component: CheckoutPayment
    // },
    // {
    //     path: '/checkout',
    //     exact: true,
    //     name: 'Checkout',
    //     component: Checkout
    // },
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/get-a-demo',
    //     exact: true,
    //     name: 'Get a Demo',
    //     component: GetADemo
    // },
    // {
    //     path: '/thank-you',
    //     exact: true,
    //     name: 'Thanks You',
    //     component: ThankYou
    // },
   
];

export default routes