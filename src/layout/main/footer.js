import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

import SiteService from "../../service/site.service";
import SEO_Footer from "../../data/sites/seo/footer-menu";
import Social_Footer from "../../data/sites/social/footer-menu";
import Design_Footer from "../../data/sites/design/footer-menu";

import ENV from "../../env.config";

class FooterLayout extends React.Component {
	constructor() {
		super();
	}
	render() {
		if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.SEO.CODE) {
			return (
				<footer>
					<div className="container pv-30">
						<div className="footer-container">
							<div className="site-info">
								<img
									src={SiteService.getActiveSiteSettings().LOGO_URL_WHITE}
									className="img-fluid mb-15"
									style={{ width: "147px" }}
								/>
								<p style={{ fontSize: "14px", fontWeight: "500", maxWidth: "240px" }}>
									99xSEO™ is a platform designed for business and Agile Enterprises to build & grow
									their business with quality search marketing services & structured services.
								</p>

								<div>
									<a href="mailto:business@99x.network">business@99x.network</a>
								</div>

								{/* <div className="social-media">
                                    <img src="https://ik.imagekit.io/99x/startup/linkedin_white_CVtihrtra.png" />
                                    <img src="https://ik.imagekit.io/99x/startup/twitter_white_V96bgvSysV.png" style={{marginLeft:"15px"}}/>
                                </div> */}
							</div>
							<div className="site-menu">
								{SEO_Footer.map((mr, i) => (
									<div className="menu-section">
										<h2>{mr.title}</h2>
										<ul>
											{mr.links.map((m, i) => (
												<li key={i}>
													{m.link && <NavLink to={m.link}>{m.title}</NavLink>}
													{m.href && (
														<a href={m.link} target="_blank">
															{m.title}
														</a>
													)}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="footer-copyright">©2020 99xapps, All rights reserved.</div>
					</div>
				</footer>
			);
		}

		if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.SOCIAL.CODE) {
			return (
				<footer>
					<div className="container pv-30">
						<div className="footer-container">
							<div className="site-info">
								<img
									src={SiteService.getActiveSiteSettings().LOGO_URL_WHITE}
									className="img-fluid mb-15"
									style={{ width: "147px" }}
								/>
								<p style={{ fontSize: "14px", fontWeight: "500", maxWidth: "240px" }}>
									99xSocial™ is an Integrated Social Media Management & Marketing Platform for
									Digital Brands and Businesses.
								</p>
							</div>
							<div className="site-menu">
								{Social_Footer.map((mr, i) => (
									<div className="menu-section">
										<h2>{mr.title}</h2>
										<ul>
											{mr.links.map((m, i) => (
												<li key={i}>
													{m.link && <NavLink to={m.link}>{m.title}</NavLink>}
													{m.href && (
														<a href={m.link} target="_blank">
															{m.title}
														</a>
													)}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="footer-copyright">©2020 99xapps, All rights reserved.</div>
					</div>
				</footer>
			);
		}

		if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.DESIGN.CODE) {
			return (
				<footer>
					<div className="container pv-30">
						<div className="footer-container">
							<div className="site-info">
								<img
									src={SiteService.getActiveSiteSettings().LOGO_URL_WHITE}
									className="img-fluid mb-15"
									style={{ width: "147px" }}
								/>
								<p style={{ fontSize: "14px", fontWeight: "500", maxWidth: "240px" }}>
									99x Design™ is a Premier Creative & UX Design Marketplace with Smart Subscriptions
									& On-Demand Services.
								</p>
							</div>
							<div className="site-menu">
								{Design_Footer.map((mr, i) => (
									<div className="menu-section">
										<h2>{mr.title}</h2>
										<ul>
											{mr.links.map((m, i) => (
												<li key={i}>
													{m.link && <NavLink to={m.link}>{m.title}</NavLink>}
													{m.href && (
														<a href={m.link} target="_blank">
															{m.title}
														</a>
													)}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="footer-copyright">©2020 99xapps, All rights reserved.</div>
					</div>
				</footer>
			);
		}

		let footerMenu = {
			Subscription: [
				{
					title: "SEO",
					link: "/c/seo",
				},
				{
					title: "Social Media",
					link: "/c/social-media",
				},
				{
					title: "Digital Marketing",
					link: "/c/digital-marketing",
				},
				{
					title: "Graphic Design",
					link: "/c/graphic-design",
				},
				{
					title: "UI/UX Design",
					link: "/c/ui-ux",
				},
				{
					title: "Video Editing",
					link: "/c/video",
				},
				{
					title: "Web Development",
					link: "/c/web-dev",
				},
				{
					title: "App Development",
					link: "/c/mobile-app-dev",
				},
				{
					title: "App Search Optimization",
					link: "/c/aso",
				},
				{
					title: "All-in-one Copywriting",
					link: "/c/content-all",
				},
				{
					title: "Articles & Blogs",
					link: "/c/article-and-blogs",
				},
				{
					title: "CXO Marketing",
					link: "/c/cxo-marketing",
				},
			],
			OnDemand: [
				{
					title: "Pitch Decks",
					link: "/on-demand/pitch-deck",
				},
				{
					title: "Logo Design",
					link: "/on-demand/logo-design",
				},
				{
					title: "Stationery Kits",
					link: "/on-demand/stationary",
				},
				{
					title: "Promo Videos",
					link: "/on-demand/videos",
				},
				// {
				//     title:'Brand Style Guide',
				//     link:''
				// },
			],
			AllAccessPack: [
				{
					title: "Digital All Access",
					link: "/all-access/digital",
				},
				{
					title: "Design All Access",
					link: "/all-access/design",
				},
				{
					title: "Video All Access",
					link: "/all-access/studio",
				},
				{
					title: "Tech All Access",
					link: "/all-access/tech",
				},
			],
			Product: [
				{
					title: "How it works?",
					link: "/how-it-works",
				},
				{
					title: "Schedule Consult",
					link: "/contact",
				},
				{
					title: "Feature Work",
					link: "",
				},
			],
			Company: [
				{
					title: "About",
					link: "/about",
				},
				{
					title: "Creators",
					link: "/creators",
				},
				{
					title: "Business",
					link: "/brands",
				},
				{
					title: "Enterprises",
					link: "/enterprise-plan",
				},
				{
					title: "Terms of Service",
					link: "/p/terms",
				},
				{
					title: "Privacy Policy",
					link: "/p/privacy-policy",
				},
				// {
				//     title:'Refund Policy',
				//     link:''
				// },
			],
			Support: [
				{
					title: "Support",
					href: "https://99x.freshdesk.com",
				},
			],
		};

		return (
			<footer>
				<div className="container pv-30">
					<div className="footer-container">
						<div className="site-info">
							<img
								src="https://ik.imagekit.io/99x/startup/99xStartup_white_uUGDgdALbr.png"
								className="img-fluid mb-15"
								style={{ width: "147px" }}
							/>
							<p style={{ fontSize: "14px", fontWeight: "500", maxWidth: "240px" }}>
								99x Startup is a platform designed for Startups and Agile Enterprises alike to build
								& grow their business with quality work & structured services.
							</p>
							<p>
								<a className="email" href="mailto:business@99x.network">business@99x.network</a>
							</p>

							{/* <div className="social-media">
                                <img src="https://ik.imagekit.io/99x/startup/linkedin_white_CVtihrtra.png" />
                                <img src="https://ik.imagekit.io/99x/startup/twitter_white_V96bgvSysV.png" style={{marginLeft:"15px"}}/>
                            </div> */}
						</div>
						<div className="site-menu">
							<div className="menu-section">
								<h2>Subscription</h2>
								<ul>
									{footerMenu.Subscription.map((m, i) => (
										<li key={i}>
											<NavLink to={m.link}>{m.title}</NavLink>
										</li>
									))}
								</ul>
							</div>

							<div className="menu-section">
								<h2>On-Demand</h2>
								<ul>
									{footerMenu.OnDemand.map((m, i) => (
										<li key={i}>
											<NavLink to={m.link}>{m.title}</NavLink>
										</li>
									))}
								</ul>

								<br />

								<h2>All Access Passes</h2>
								<ul>
									{footerMenu.AllAccessPack.map((m, i) => (
										<li key={i}>
											<NavLink to={m.link}>{m.title}</NavLink>
										</li>
									))}
								</ul>
							</div>

							<div className="menu-section">
								<h2>Product</h2>
								<ul>
									{footerMenu.Product.map((m, i) => (
										<li key={i}>
											<NavLink to={m.link}>{m.title}</NavLink>
										</li>
									))}
								</ul>
							</div>

							<div className="menu-section">
								<h2>Company</h2>
								<ul>
									{footerMenu.Company.map((m, i) => (
										<li key={i}>
											<NavLink to={m.link}>{m.title}</NavLink>
										</li>
									))}
								</ul>
							</div>

							<div className="menu-section">
								<h2>Support</h2>
								<ul>
									{footerMenu.Support.map((m, i) => (
										<li key={i}>
											<a href={m.href} target="_blank">
												{m.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">©2020 99xapps, All rights reserved.</div>
				</div>
			</footer>
		);
	}
}
export default FooterLayout;
