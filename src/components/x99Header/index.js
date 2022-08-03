import React from "react";
import styled from "styled-components";
import "./style.scss";

const MainSection = styled.section`
	width: 100%;
	background: #fafafa;
`;

const X99Header = (props) => {
	const Sites = [
		{
			image: "https://ik.imagekit.io/99x/_head/99XDesign_ksTfE1po_S.png",
			logo: "https://ik.imagekit.io/99x/startup/revised/logo/99XDesign_Logo_ZHifbc_ZGc.svg",
			title: "99x Design",
			link: "",
		},
		{
			image: "https://ik.imagekit.io/99x/seo/Group_57_TTfuoFo9S.svg",
			logo: "https://ik.imagekit.io/99x/seo/Group_57_TTfuoFo9S.svg",
			title: "99x Social",
			link: "https://99xsocial.com",
		},
		{
			height: "11.67px",
			image: "https://ik.imagekit.io/99x/_head/99xSeo_8l_c9-_S5.png",
			logo: "https://ik.imagekit.io/99x/startup/revised/logo/99xSeo_logo_0Zq-d7c6zw.svg",
			title: "99x SEO",
			link: "https://99xseo.com",
		},
		// {
		// 	image: "https://ik.imagekit.io/99x/_head/99xContent_xBmSXbnOAa.png",
		// 	logo: "https://ik.imagekit.io/99x/startup/revised/logo/99xContent_Logo_5erlzrx3hA.svg",
		// 	title: "99x Content",
		// 	link: "",
		// 	height: "11.67px",
		// },
		{
			image: "https://ik.imagekit.io/99x/_head/99xStudio_ymBHf75iR.png",
			logo: "https://ik.imagekit.io/99x/startup/revised/logo/99xStudio_logo_r2-w_C8gJ.svg",
			title: "99x Studio",
			link: "",
			height: "11.67px",
		},
	];

	return (
		<MainSection className="desktop-only">
			<div className="container x99-header">
				<div className="row pv-20">
					<div className="col-4">
						<img src="https://ik.imagekit.io/99x/startup/revised/logo/99xApps_Logo_-AmZzEVZXv.svg" />
					</div>
					<div className="col-8">
						<div className="right">
							<div className="site-holder">
								{/* <img src="https://ik.imagekit.io/99x/_head/Group_1562_WJo7TXTxh.png" width="364px"/> */}
								<div style={{ width: "364px", display: "flex" }}>
									{Sites.map((s, i) => (
										<a href={s.link}>
											<img src={s.logo} />
										</a>
									))}
								</div>
							</div>

							{/* <div className="locale-box">
								<img src="https://ik.imagekit.io/99x/_head/Mask_Group_WOLEXqkbP.png" />
							</div> */}
							<div>
								<a style={{fontWeight:'bold'}} href="mailto:business@99x.network">business@99x.network</a>
							</div>

							{/* { Sites.map((s,i)=>(
                                    <div className="col-2">
                                        <img src={s.image} style={{height:s.height || '15px'}}/>
                                    </div>
                                ))} */}
						</div>
					</div>
				</div>
			</div>
		</MainSection>
	);
};

export default X99Header;
