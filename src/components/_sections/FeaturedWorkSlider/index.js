import React, { useState } from "react"
import W3Carousel from "../../W3Carousel"
import W3Modal from "../../w3modal/W3Modal";
import "./style.scss"

import ENV from '../../../env.config'


export default function FeaturedWorkSlider(props) {

    let [activeCat, setActiveCat] = useState(0);
    let [showPorfolio, setShowPortfolio] = useState(false)
    let [activePortfolioImage, setActivePortfolioImage] = useState("https://ik.imagekit.io/99x/portfolio/01_ef1rtrvG3.png")
    let [activePortfolioType, setActivePortfolioType] = useState("photo")

    // For 99x Startup
    let allCategories = [

        {
            title: 'UI/UX',
            items: [
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/UX_PRJCT___02___Cover_eBjffdVc4.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UX_PRJCT___02_Vv7ZLHCrr.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_5__tTqOrGzvC.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Screen_1__HOQPBDGye.png',
                },
                {
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UX_PRJCT___8_yoB29c5Ps.png',
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_7__YKZxbM4Ja.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_XCYxcnvIl.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/01_AuQzk0Eq5N.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_1__ylnECIq1y.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Screen_gFK0kTidg.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_6__jF3lfaer8.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UXPROJCT05_zHCXdoEvO1.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_2__J0Dv5pA5D.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UXPROJCT06_Ng79QHcr2.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_3__kVUhbdpndY.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UX_PRJCT___07_SVco0e7aZw.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/UX/Cover_4__Vqv3_Iuviv.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/UX_PRJCT___08_ygy1hfLaWR.png',
                },
            ]
        },
        {
            title: 'Content',
            items: [
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_WTvenAE1w.png',
                    full: 'https://ik.imagekit.io/marketex/200521/01_7CMl_uReL.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_mU0GWF3Y5.png',
                    full: 'https://ik.imagekit.io/marketex/200521/02_EyLviDeph.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_mU0GWF3Y5.png',
                    full: 'https://ik.imagekit.io/marketex/200521/03_yD9Fife9u.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_2__4kmZgEZgN.png',
                    full: 'https://ik.imagekit.io/marketex/200521/04_6o3Ay6FDu.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_3__RzXEcFbYKy5.png',
                    full: 'https://ik.imagekit.io/marketex/200521/05_UYHn5KGdR.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_4__BcbxCNGjB.png',
                    full: 'https://ik.imagekit.io/marketex/200521/06_NC7dduT-n.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_5__rm9lmCAsQ.png',
                    full: 'https://ik.imagekit.io/marketex/200521/07_nxajI9RDcnF.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_6__PkwMtP9Ob.png',
                    full: 'https://ik.imagekit.io/marketex/200521/08_LBQTNV2w2.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Cover_7__jPAmuXH4_le.png',
                    full: 'https://ik.imagekit.io/marketex/200521/09_kQ3dDhjpS.png',
                },
            ]
        },
        {
            title: 'Digital Marketing',
            items: [
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_obgv0SUvA.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/04_aRMYmzDEb.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_1__GCGZqGbPS.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/05_ck7U7dEPj9.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_2__eOe2afpaQ.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/06_gPCdvFdlx.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_3__vzN0wvX-O.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/07_GxCteJZcts.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_4__1Kerr7Nky.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/01_E3JE1BnbHO.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_6__xv4MR60tkK.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/03_gNHt_ZCb0.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/Cover_5__r_KxRcRE_.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Digital_Marketing/02_5BpwMv7CR.png',
                },
            ]
        },
        {
            title: 'Social Media',
            items: [
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/SM/Cover_1__NDLmfturAN.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/01_RlWN6o6em.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/SM/Cover_lsgLk40xT.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/01_1__lx3f-1K41.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/200521/SM/Cover_lsgLk40xT.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/7_Hu7oXal3_a.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Social_Media_04_preview_2JSk_yHZX.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/2_hUY39KrM4.mp4',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Social_Media_05_preview_0dLWGx-pl.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/8_Lo5kdaHUi.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Social_Media_06_preview_HoLhp3A-H.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/6_IE_ZKvVlX.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Social_Media_07_preview_XWd-Pg-knbl.png',
                    full: 'https://ik.imagekit.io/marketex/200521/SM/1_DOh41S6j-.png',
                },
            ]
        },
        {
            title: 'Visual Design',
            items: [
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_01_preview_JGbKlagI-.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/3_0uiPvH59q.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_02_prerview_RSVnX_rbJ71.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/2_HLJV919LaML.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_03_prerview_8YJhRttcp.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/4_UDNowxOie.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_04_prerview_0FZFRwp1I.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/6_M_lZkbWcX.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_05_prerview_X2cePn_kR.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/7_qp2n9fqvU.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_06_prerview_cHflzSA8kWt.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/5_ogcIPeUS48.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_07_prerview_NeO7PH0sE.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/9_Vrb1QKnjD.png',
                },
                {
                    thumb: 'https://ik.imagekit.io/marketex/1/Visual_Design_09_prerview_W_rRE6Hu0.png',
                    full: 'https://ik.imagekit.io/marketex/200521/UX/Visual/1_9UAAILRfCOe.png',
                },
            ]
        },
        // {
        //     title:'Technology',
        //     items:[
        //         {
        //             thumb:'',
        //             full:''
        //         },
        //         {
        //             thumb:'',
        //             full:''
        //         },
        //         {
        //             thumb:'',
        //             full:''
        //         },
        //         // {
        //         //     thumb:'',
        //         //     full:''
        //         // },
        //     ]
        // },
        {
            title: 'Videos',
            items: [
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_01_Preview_m_jXBy58U.png',
                    full: 'https://ik.imagekit.io/marketex/Featured/Short_videos/Short_video_03_QsoDsqLvB8.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_02_Preview_CZu4RNmDO.png',
                    full: 'https://ik.imagekit.io/marketex/Featured/Short_videos/Short_video_04_k_fiZFDXmS.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_01_Preview_m_jXBy58U.png',
                    full: 'https://ik.imagekit.io/marketex/Featured/Short_videos/Short_video_03_QsoDsqLvB8.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_04_Preview_Iz32adexF.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Video/2_VuWI6hx15.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_05_Preview_IwLoY5exBPH.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Video/1_0FYhQkzWD.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_02_Preview_CZu4RNmDO.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Video/4_wKOucpsi-qG.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_07_Preview_o4Klu5cP8.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Video/9_w1v9xlSDx.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_08_Preview_K1Um1kkGi.png',
                    full: 'https://ik.imagekit.io/marketex/200521/Video/3_vur-4_s-S.mp4',
                },
                {
                    type: 'video',
                    thumb: 'https://ik.imagekit.io/marketex/1/Video_ad_MyaLgyKFD.png',
                    full: 'https://ik.imagekit.io/marketex/Featured/Short_videos/Short_video_01_SI-C3jGj_.mp4',
                },
            ]
        },
    ]



    const FocusPortfolio = (item) => {
        console.log(item)
        setShowPortfolio(true)
        setActivePortfolioImage(item.full)
        if (item.type && item.type == "video") setActivePortfolioType("video")
        else setActivePortfolioType("photo")
    }

    if (props.site == "design") {

        // For 99x Design
        allCategories = [
            {
                title: 'All Works',
                items: [
                    {
                        thumb: 'https://ik.imagekit.io/99x/design/_new/Frame_46_GF7X_YBzRE.png',
                        full: 'https://ik.imagekit.io/99x/design/_new/Frame_46_GF7X_YBzRE.png',
                    },
                    {
                        thumb: 'https://ik.imagekit.io/99x/design/_new/Work_-_2_RmVbHdzvG.png',
                        full: 'https://ik.imagekit.io/99x/design/_new/Work_-_2_RmVbHdzvG.png'
                    }
                ]
            },
            {
                title: 'Web & App Design',
                items: []
            },
            {
                title: 'Logos',
                items: []
            },
            {
                title: 'Animated GIFs',
                items: []
            },
            {
                title: 'Social Media Cover',
                items: []
            },
            {
                title: 'Illustrations',
                items: []
            },
        ]

        return (
            <>
                <div className="container featured-work-slider-design">

                    <div className="section-head">
                        <h2>Featured Work</h2>
                    </div>

                    <div className="cat">

                        {allCategories.map((c, i) => (
                            <button
                                className={`${activeCat == i ? 'active' : ''}`}
                                onClick={() => { setActiveCat(i) }}>
                                {c.title}
                            </button>
                        ))}

                    </div>

                    <div className="work">


                        <W3Carousel className={`${activeCat == 0 ? '' : 'hidden'}`}>
                            {allCategories[0].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                        <W3Carousel className={`${activeCat == 1 ? '' : 'hidden'}`}>
                            {allCategories[1].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                        <W3Carousel className={`${activeCat == 2 ? '' : 'hidden'}`} l>
                            {allCategories[2].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                        <W3Carousel className={`${activeCat == 3 ? '' : 'hidden'}`}>
                            {allCategories[3].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                        <W3Carousel className={`${activeCat == 4 ? '' : 'hidden'}`}>
                            {allCategories[4].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                        <W3Carousel className={`${activeCat == 5 ? '' : 'hidden'}`}>
                            {allCategories[5].items.map((item, i) => (
                                <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                    <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                                </div>
                            ))}
                        </W3Carousel>

                    </div>

                </div>
                <W3Modal
                    className="featured-work-modal"
                    show={showPorfolio}
                    onClick={() => { }}
                    onModalChange={() => { setShowPortfolio(false) }}
                    showFooter="false"
                    backdrop="static"
                >
                    {activePortfolioType == "video" ? <>
                        <center>
                            <video controls>
                                <source src={activePortfolioImage} type="video/mp4" />
                            </video>
                        </center>
                    </> : <img className="active-portfolio-large" src={activePortfolioImage} />}

                </W3Modal>
            </>
        )
    }

    return (
        <>
            <div className="container featured-work-slider">

                <div className="section-head">
                    <h2>Featured Work</h2>
                    <p>Our customers love our work, checkout why.</p>
                </div>

                <div className="cat">

                    {allCategories.map((c, i) => (
                        <button
                            className={`${activeCat == i ? 'active' : ''}`}
                            onClick={() => { setActiveCat(i) }}>
                            {c.title}
                        </button>
                    ))}

                    {/* <button className="">UI/UX</button>
                        <button className="active"></button>
                        <button className="">Social Media</button>
                        <button className="">Graphic Design</button>
                        
                        <button className="">Technology</button>
                        <button className="">SEO</button> */}


                </div>

                <div className="work">


                    <W3Carousel className={`${activeCat == 0 ? '' : 'hidden'}`}>
                        {allCategories[0].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                    <W3Carousel className={`${activeCat == 1 ? '' : 'hidden'}`}>
                        {allCategories[1].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                    <W3Carousel className={`${activeCat == 2 ? '' : 'hidden'}`} l>
                        {allCategories[2].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                    <W3Carousel className={`${activeCat == 3 ? '' : 'hidden'}`}>
                        {allCategories[3].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                    <W3Carousel className={`${activeCat == 4 ? '' : 'hidden'}`}>
                        {allCategories[4].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                    <W3Carousel className={`${activeCat == 5 ? '' : 'hidden'}`}>
                        {allCategories[5].items.map((item, i) => (
                            <div className="item" key={i} onClick={(e) => FocusPortfolio(item)}>
                                <img src={item.thumb} style={{ padding: '10px', cursor: 'pointer' }} />
                            </div>
                        ))}
                    </W3Carousel>

                </div>

            </div>
            <W3Modal
                className="featured-work-modal"
                show={showPorfolio}
                onClick={() => { }}
                onModalChange={() => { setShowPortfolio(false) }}
                showFooter="false"
                backdrop="static"
            >
                {activePortfolioType == "video" ? <>
                    <center>
                        <video controls>
                            <source src={activePortfolioImage} type="video/mp4" />
                        </video>
                    </center>
                </> : <img className="active-portfolio-large" src={activePortfolioImage} />}

            </W3Modal>
        </>
    )
}