import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

import Image from 'next/image'
import React, { PureComponent } from 'react';
import { data } from '../component/Pie'
import News from '../component/News'
import dynamic from "next/dynamic";
import { _tr } from "../services/translate"


const MyResponsivePie = dynamic(() => import('../component/Pie'), { ssr: false })



export default function Home() {


    

    const nbholder = 1.1;
    const nbtransaction = 1.3;
    const tokenPrice = 0.00;


    return (
        <div >
            <main>
                <section className="mt-n15 pt-15 pb-15  bg-black bg-pattern-2 text-center">
                    
                    <div className='mt-15'>
                        <Image src="/images/logo_bgLess_border.png" alt="Kik" width={120} height={115} />
                    </div>

                    <h2 className='text-light mt-5'>
                        {_tr("headline1")},<br />
                        {_tr("headline2")}
                    </h2>
                </section>
                

                <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x text-dark">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                    </div>
                </div>

                <section className="bg-gradient-dark-black py-5 pt-md-14 text-light" id="KIK">
                    <div className='container-fluid text-center'>
                        <h2 className='display-5 fw-bold text-white'>
                            What is the KIK ?
                        </h2>
                        <p>
                            KIK is a BEP-20 token used in the platform Ikalas.com as the front door of the premium access.<br />
                            The KIK token is fully tradable and allow the owners to get specific pivileges on the platform.<br />
                            The KIK is also a new way to make income from your developping skills by creating usefull tools for the community.
                        </p>
                    </div>
                </section>

                <section className="py-5 bg-black text-dark pb-2">

                    <div className="container">
                        <div className="row  d-flex justify-content-center">

                            <div className="card bg-dark rounded-3 mx-2 col-sm MobColonne">
                                <div className="card-body d-flex justify-content-center h-40">
                                    <h2 className="card-title text-white">
                                        <Image src="/images/token.png" alt="Kik" width={90} height={90} />
                                    </h2>
                                </div>
                                <div className="card-body p-5 h-50">


                                    <h3 className="fw-bold text-white">
                                        Non-Mintable
                                    </h3>

                                    <p className="text-muted mb-0">
                                        We can &apos; t create new KIK token, the total amount is immutable.
                                    </p>

                                </div>
                            </div>

                            <div className="card bg-dark rounded-3 mx-2 col-sm MobColonne">
                                <div className="card-body d-flex justify-content-center h-40">
                                    <h2 className="card-title text-white">
                                        <Image src="/images/gold-ingots.png" alt="Kik" width={90} height={90} />
                                    </h2>
                                </div>
                                <div className="card-body p-5 h-50">

                                    <h3 className="fw-bold text-white">
                                        Supply
                                    </h3>

                                    <p className="text-muted mb-0">
                                        The KIK was created on the BSC blockchain with a max supply of 100 000 000 KIK.
                                    </p>

                                </div>
                            </div>

                            <div className="card  bg-dark rounded-3 mx-2 col-sm MobColonne">
                                <div className="card-body d-flex justify-content-center h-40" >
                                    <h2 className="card-title text-white">
                                        <Image src="/images/withdraw.png" alt="Kik" width={90} height={90} />
                                    </h2>
                                </div>
                                <div className="card-body p-5 h-50">
                                    <h3 className="fw-bold text-white">
                                        Earnable
                                    </h3>
                                    <p className="text-muted mb-0">
                                        The KIK is earnable by the community who serve the platform.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="pt-8 pt-md-12 bg-black py-15 d-flex justify-content-center pb-10" id="Ikalas">
                    <div className='customContainer d-flex justify-content-center MobCenterText align-item-row'>
                        <div className='text-light row px-10'>

                            <h2 className='display-5 fw-bold text-white'>
                                What is the Ikalas platform ?
                            </h2>
                            <p className="text-muted lead mb-6">
                                <span className="text-white fw-bold">Create tools. </span> The Ikalas platform allows you to create tools with code and deploy it as a module on the website.
                            </p>
                            <p className="text-muted lead mb-7 mb-md-0">
                                <span className="text-white fw-bold">Use tools. </span> Use the community tools to create whatever you want by the website interface or the developpement interface (coming soon).
                            </p>
                            <p className="text-muted lead mb-7 mb-md-0 mt-2">
                                <a className="text-primary fw-bold" href="https://ikalas.com/app">Ikalas.com</a>
                            </p>
                        </div>
                        <div className="MobDnoneImg">
                            <Image src="/images/imageIkalas.png" alt="ikalasWebsitePics" width="4000" height="2500" objectFit="cover"/>
                        </div>
                    </div>
                </section>



                <div className='delimiter rotateDiv bg-gradient-dark-black'  id="Stats"></div>

                <section className=" pt-8 pt-md-8 pb-8 bg-dark w-100 d-flex justify-content-around">
                    <div className='container'>
                        <div className="d-flex justify-content-center text-center">
                            <div className="col-12 col-md-8 col-lg-6">


                                <h2 className="display-3 fw-bold text-white">
                                    The KIK Token
                                </h2>
                                <h6 className="text-uppercase text-info">
                                    with numbers
                                </h6>


                                <p className="text-muted lead mb-6 mb-md-8">
                                    We &apos; ve made it easier for thousands of people to build their dream projects.
                                </p>

                                <div className="d-flex justify-content-between MobColumn" >
                                    <div>
                                        <h1 className="fw-bold text-white mb-0">
                                            <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbholder} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{nbholder}</span>K
                                        </h1>
                                        <p className="text-gray-700 mb-0">
                                            holders
                                        </p>
                                    </div>
                                    <div className="">
                                        <h1 className="fw-bold text-white mb-0">
                                            <span data-countup="{&quot;startVal&quot;: 0}" data-to={nbtransaction} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{nbtransaction}</span>K
                                        </h1>
                                        <p className="text-gray-700 mb-0">
                                            transactions
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <h1 className="fw-bold text-white mb-0">
                                            <span data-countup="{&quot;startVal&quot;: &quot;0&quot;}" data-to={tokenPrice} data-aos="" data-aos-id="countup:in" className="aos-init aos-animate">{tokenPrice}</span>$
                                        </h1>
                                        <p className="text-gray-700 mb-0">
                                            price
                                        </p>
                                    </div>
                                </div>
                                <a href="https://bscscan.com/token/0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2" target="_blank" rel="noreferrer" className='btn btn-primary mt-10'>
                                    Discover the contract
                                </a>
                            </div>

                        </div>
                    </div>

                </section>

                <div className='delimiter bg-gradient-dark-black'></div>


                <section className="py-2 pt-md-12 bg-black text-center text-dark">
                    <div>
                        <h2 className='display-3 fw-bold text-white'>Token Distribution</h2>
                        <p className="text-muted lead mb-6">
                            The KIK token is distributed on the Binance SmartChain in the following way :
                        </p>
                        <div className='d-flex justify-content-center'>
                            <div className="divchart" data-aos="zoom-in">
                                <MyResponsivePie data={data} />
                            </div>
                        </div>
                    </div>
                </section>



                <section className="py-12 pt-md-12 pb-13 bg-black text-center text-dark" id="Roadmap">
                    <div className='mb-10'>
                        <h2 className='display-3 fw-bold text-white'>Roadmap</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-timeline">
                                    <div className="timeline" data-aos="flip-up">
                                        <a className="timeline-content">
                                            <div className="timeline-year">2022</div>
                                            <ul className="list-unstyled w-100 text-right py-3">
                                                <li className="pb-5"><span><b>SEPTEMBER : </b></span>Official launch of the KIK token</li>
                                                <li className="pb-5"><span><b>JULY : </b></span>Creation of NFT on Ikalas</li>
                                                <li className="pb-5"><span><b>JUNE : </b></span>Creation of ERC-20 token on Polygon and Ethereum blockchain on Ikalas</li>
                                                <li className="pb-5"><span><b>MAY : </b></span>Creation of ERC-20 token on BSC blockchain on Ikalas</li>
                                            </ul>
                                        </a>
                                    </div>
                                    <div className="timeline" data-aos="flip-up" >
                                        <a className="timeline-content">
                                            <div className="timeline-year">2021</div>
                                            <ul className="list-unstyled w-100 text-left py-3">
                                                <li className="pb-5"><span><b>DECEMBER : </b></span>Launch multisender for Polygon network on Ikalas</li>
                                                <li className="pb-5"><span><b>JULY : </b></span>Creation of multisender on BSC and ETH networks on Ikalas </li>
                                                <li className="pb-5"><span><b>JANUARY : </b></span>Launch of the beta version of the Ikalas website</li>
                                            </ul>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="py-12 pt-md-5 bg-black text-center text-dark" id="News">
                    <div >
                        <h2 className='display-3 fw-bold text-white'>News</h2>
                    </div>
                    <div className="container">
                        <News />
                    </div>
                </section>

                <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x text-dark">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
                    </div>
                </div>
            </main>

        </div>
    )
}
