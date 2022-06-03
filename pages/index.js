
import Image from 'next/image'
import React, { PureComponent, useEffect} from 'react';
import { data } from '../component/Pie'
import News from '../component/News'
import Timeline from '../component/Timeline'
import AddKIK from '../component/Addkik'

import dynamic from "next/dynamic";
import { _tr } from "../services/translate"
import { ScrollToTop } from '../component/ScrollToTop';
import { Translation } from 'react-i18next';
import Addkik from '../component/Addkik';



const MyResponsivePie = dynamic(() => import('../component/Pie'), { ssr: false })


export default function Home() {


    const nbholder = 1.1;
    const nbtransaction = 1.3;
    const tokenPrice = 0.00;

    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookie[key.trim()] = value;
        })
        return cookie[cookieName];
    }


    function TwitterLink()
    {
        var lang = getCookie("userLocale");
        if (lang === "fr") {
            window.open("https://twitter.com/ikalasfr", '_blank');
        } else {
            window.open("https://twitter.com/ikalas_en", '_blank');
        }

    }
    function LinkedinLink()
    {
        var lang = getCookie("userLocale");
        if (lang === "fr") {
            window.open("https://www.linkedin.com/company/ikalas-fr/", '_blank');
        } else {
            window.open("https://www.linkedin.com/company/ikalas/", '_blank');
        }

    }
    


    return (
        <>
            <div >
                <main>
                    <section className="mt-n15 pt-15 pb-15 bg-white bg-pattern-1 text-center">

                        <div className='mt-15'>
                            <svg viewBox="0 0 3267 3021" xmlns="http://www.w3.org/2000/svg" className='logoColor' width={150} style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"}}>
                                <path d="M1627 0a1511 1511 0 1 1-1 3022 1511 1511 0 0 1 1-3022Zm2 29c821 0 1488 662 1488 1477s-667 1477-1488 1477S142 2321 142 1506 808 29 1629 29Z" />
                                <path d="m2008 292-800 1008 367 300-863 821 925-713 909 754-1167-1183 629-987Zm-396 1337 21 17-225 179 204-196Zm-150-575-183 238 242 200-204-205 145-233Z" />
                            </svg>

                        </div>

                        <h2 className='mt-5'>
                            {_tr("slogan1")},<br />
                            {_tr("slogan2")}
                        </h2>
                    </section>


                    <div className="position-relative">
                        <div className="shape shape-bottom shape-fluid-x text-white">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                        </div>
                    </div>

                    <section className="bg-white py-5 pt-md-14" id="KIK">
                        <div className='container-fluid text-center'>
                            <h2 className='display-5 fw-bold'>
                                {_tr("KikExplainTitle")}
                            </h2>
                            <p>
                                {_tr("KikExplain1")}<br />
                                {_tr("KikExplain2")}<br />
                                {_tr("KikExplain3")}<br />
                            </p>
                        </div>
                    </section>

                    
                    <section className="py-5 bg-white pb-10">

                        <div className="container">
                            <div className="row  d-flex justify-content-center">

                                <div className="card bg-light rounded-3 mx-2 col-sm MobColonne">
                                    <div className="card-body d-flex justify-content-center h-40">
                                        <h2 className="card-title">
                                            <Image src="/images/token.png" alt="Kik" width={90} height={90} />
                                        </h2>
                                    </div>
                                    <div className="card-body p-5 h-50">


                                        <h3 className="fw-bold">
                                            {_tr("Card1Title")}
                                        </h3>

                                        <p className="text-muted mb-0">
                                            {_tr("Card1Desc")}
                                        </p>

                                    </div>
                                </div>

                                <div className="card bg-light rounded-3 mx-2 col-sm MobColonne">
                                    <div className="card-body d-flex justify-content-center h-40">
                                        <h2 className="card-title text-white">
                                            <Image src="/images/gold-ingots.png" alt="Kik" width={90} height={90} />
                                        </h2>
                                    </div>
                                    <div className="card-body p-5 h-50">

                                        <h3 className="fw-bold">
                                            {_tr("Card2Title")}
                                        </h3>

                                        <p className="text-muted mb-0">
                                            {_tr("Card2Desc")}
                                        </p>

                                    </div>
                                </div>

                                <div className="card  bg-light rounded-3 mx-2 col-sm MobColonne">
                                    <div className="card-body d-flex justify-content-center h-40" >
                                        <h2 className="card-title">
                                            <Image src="/images/withdraw.png" alt="Kik" width={90} height={90} />
                                        </h2>
                                    </div>
                                    <div className="card-body p-5 h-50">
                                        <h3 className="fw-bold">
                                            {_tr("Card3Title")}
                                        </h3>
                                        <p className="text-muted mb-0">
                                            {_tr("Card3Desc")}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="pt-5 pt-md-11 bg-white py-15 d-flex justify-content-center pb-10" id="Ikalas">
                        <div className='customContainer d-flex justify-content-center MobCenterText align-item-row'>
                            <div className='row px-10'>

                                <h2 className='display-5 fw-bold'>
                                    {_tr("IkalasExplainTitle")}
                                </h2>
                                <p className="text-muted lead mb-6">
                                    <span className="text-primary fw-bold">{_tr("ImportantWord1")}</span>{_tr("IkalasText1")}
                                </p>
                                <p className="text-muted lead mb-7 mb-md-0">
                                    <span className=" text-primary fw-bold">{_tr("ImportantWord2")}</span>{_tr("IkalasText2")}
                                </p>
                                <p className="text-muted lead mb-7 mb-md-0 mt-2">
                                    <a className="text-primary fw-bold" href="https://ikalas.com/app">Ikalas.com</a>
                                </p>
                            </div>
                            <div className="MobDnoneImg">
                                <Image src="/images/imageIkalas.png" alt="ikalasWebsitePics" width="4000" height="2500" objectFit="cover" />
                            </div>
                        </div>
                    </section>



                    <div className='delimiter rotateDiv FadeDivUp pt-13' id="Stats"></div>

                    <section className=" pt-8 pt-md-8 pb-8 bg-primary w-100 d-flex justify-content-around">
                        <div className='container'>
                            <div className="d-flex justify-content-center text-center">
                                <div className="col-12 col-md-8 col-lg-6">

                                    <h2 className="display-3 fw-bold" style={{color:"white"}}>
                                        {_tr("StatsTitle")}
                                    </h2>
                                    <h6 className="text-uppercase" style={{color:"#ABBCD8"}}>
                                        {_tr("withNumbers")}
                                    </h6>


                                    <p className="lead mb-6 mb-md-8" style={{color:"white"}}>
                                        {_tr("StatsText1")}
                                    </p>

                                    <div className="d-flex justify-content-between MobColumn" >
                                        <div>
                                            <h1 className="fw-bold mb-0" style={{color:"white"}}>
                                                <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbholder} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{nbholder}</span>K
                                            </h1>
                                            <p className="mb-0" style={{color:"white"}}>
                                                {_tr("Label1")}
                                            </p>
                                        </div>
                                        <div className="">
                                            <h1 className="fw-bold mb-0" style={{color:"white"}}>
                                                <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbtransaction} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{nbtransaction}</span>K
                                            </h1>
                                            <p className="mb-0" style={{color:"white"}}>
                                                {_tr("Label2")}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <h1 className="fw-bold mb-0" style={{color:"white"}}>
                                                <span data-countup="{&quot;startVal&quot;: &quot;0&quot;}" data-to={tokenPrice} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{tokenPrice}</span>$
                                            </h1>
                                            <p className="mb-0" style={{color:"white"}}>
                                                {_tr("Label3")}
                                            </p>
                                        </div>
                                    </div>
                                    <a href="https://bscscan.com/token/0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2" target="_blank" rel="noreferrer" className='btn btn-info mt-10' style={{color:"white"}}>
                                        {_tr("DiscoverButton")}
                                    </a>
                                </div>

                            </div>
                        </div>

                    </section>

                    <div className='delimiter FadeDivUp'></div>


                    <section className="py-2 pt-md-12 bg-white text-center text-dark">
                        <div>
                            <h2 className='display-3 fw-bold'>{_tr("DistributionTitle")}</h2>
                            <p className="text-muted lead mb-6">
                                {_tr("DistributionText1")}
                            </p>
                            <div className='d-flex justify-content-center'>
                                <div className="divchart" data-aos="zoom-in">
                                    <MyResponsivePie data={data} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-2 pt-md-12 bg-white text-center pb-5" id="Roadmap">
                        <div>
                            <h2 className='display-3 fw-bold pb-8'>{_tr("RoadmapTitle")}</h2>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <Timeline />
                        </div>
                    </section>

                    <section style={{position:"relative", overflow:'hidden', maxHeight:"800px"}} className="bg-white">

                            <div className="shape shape-top shape-fluid-x text-white">
                                <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor"></path>
                                </svg>
                            </div>
                            
                            <h2 className='position-absolute text-center' style={{top:"50%",left:"50%", transform:"translate(-50%,-50%)", fontSize:"35px", color:"white"}}>{_tr("TitleVideo")}
                            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                                <li className="list-inline-item list-social-item me-5">
                                    <a onClick={TwitterLink} target="_blank" className="text-decoration-none">
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" fill="#7C69EF"/></g><defs><clipPath id="clip0"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item me-5">
                                    <a  onClick={LinkedinLink} className="text-decoration-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#7C69EF" /></svg>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item me-5">
                                    <a href="https://www.youtube.com/channel/UChkbRu3hQUNKdbKymsIQtzQ" target="_blank" className="text-decoration-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#7C69EF' style={{enableBackground:"new 0 0 512 512"}} width="30" height="30">
                                            <path d="M507 146s-6-38-21-55c-19-22-41-22-51-23-71-5-179-6-179-6s-108 1-179 6c-10 1-32 2-51 23-16 17-21 55-21 55s-5 45-5 90v41c0 45 5 89 5 89s6 38 21 55c19 22 45 21 56 24 41 4 174 5 174 5s108 0 179-6c10-1 32-2 51-23 15-17 21-55 21-55s5-45 5-89v-41c0-45-5-90-5-90" />
                                            <path style={{fill:"#1b2a4e"}} d="M194 167v191l168-93z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="list-inline-item list-social-item me-5">
                                    <a href="https://github.com/ikalasdev" target="_blank" className="text-decoration-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#7C69EF"viewBox="0 0 24 24" ><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                </li>
                            </ul>
                            </h2>
                            <video style={{width:"100%"}} className="DisabledPointer"  loop autoPlay muted>
                                <source src="./assets/video/pexels-henry-5538825.mp4" type="video/mp4" />
                            </video>
                            

                            <div className="shape shape-bottom shape-fluid-x text-white ">
                                <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M720 125L2160 0h720v250H0V125h720z" fill="currentColor"></path>
                                </svg>
                            </div>

 
                    </section>

                    

                    

                    <section className="py-12 pt-md-10 bg-white text-center" id="News">
                        <div >
                            <h2 className='display-3 fw-bold'>{_tr("NewsTitle")}</h2>
                        </div>
                        <div className="container">
                            <News />
                        </div>
                    </section>

                    <section className="py-12 pt-md-10 bg-white text-center" id="News">
                        <div className="container">
                            <Addkik />
                        </div>
                    </section>

                    <div className="position-relative">
                        <div className="shape shape-bottom shape-fluid-x text-light">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </main>

            </div>
            <ScrollToTop />
        </>
    )
}
