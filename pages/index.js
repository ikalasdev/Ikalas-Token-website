
import Image from 'next/image'
import React, { PureComponent} from 'react';
import { data } from '../component/Pie'
import News from '../component/News'
import Timeline from '../component/Timeline'
import AddKIK from '../component/Addkik'

import dynamic from "next/dynamic";
import { _tr } from "../services/translate"
import { ScrollToTop } from '../component/ScrollToTop';
import { Translation } from 'react-i18next';
import Addkik from '../component/Addkik';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';


const MyResponsivePie = dynamic(() => import('../component/Pie'), { ssr: false })


export default function Home() {


    const nbholder = 1.1;
    const nbtransaction = 1.3;
    const tokenPrice = 0.00;

    const { theme } = useTheme();

    useEffect(() => {
        if (theme === "dark") {
            console.log("test")
            document.getElementById("mainLogo").src = "/images/logo_bgLess_border.png";
            console.log(document.getElementById("mainLogo").src)
        } else {
            document.getElementById("mainLogo").src = "/images/blackIkalas_border.png";
        }
    });


    return (
        <>
            <div >
                <main>
                    <section className="mt-n15 pt-15 pb-15 bg-white bg-pattern-1 text-center">

                        <div className='mt-15'>
                            <Image id="mainLogo" src="/images/logo_bgLess_border.png" alt="Kik" width={120} height={115} />
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
                                    <a href="https://bscscan.com/token/0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2" target="_blank" rel="noreferrer" className='btn btn-dark mt-10' style={{color:"white"}}>
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
                            
                            <h2 className='position-absolute text-center' style={{top:"50%",left:"50%", transform:"translate(-50%,-50%)", fontSize:"35px", color:"white"}}>{_tr("TitleVideo")}</h2>
                            <video style={{width:"100%"}}  loop autoPlay muted>
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
