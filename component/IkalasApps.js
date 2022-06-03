import { _tr } from "../services/translate";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";



const IkalasApps = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        arrows: true,
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <div style={{width:"80%"}} className="mx-auto mt-14" >
                <Slider {...settings}>
                    <div>
                        <a href="https://ikalas.com/app/bsc-token-multisender" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height:"370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/binance.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps1Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps1Desc")}
                                </p>
                            </div>  
                        </div>
                        </a>
                    </div>
                    <div>
                    <a href="https://ikalas.com/app/matic-token-multisender" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height: "370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/polygon.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps2Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps2Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div >
                    <a href="https://ikalas.com/app/bsc-batch-wallet-generator" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height:"370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/binance.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps3Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps3Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div>
                    <a href="https://ikalas.com/app/eth-token-multisender" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height: "370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/ethereum.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps4Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps4Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div>
                    <a href="https://ikalas.com/app/heco-wallet-generator" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height: "370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/HECO.jpeg" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps5Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps5Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div >
                    <a href="https://ikalas.com/app/bep20-faucet" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height: "370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/binance.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps6Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps6Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div>
                    <a href="https://ikalas.com/app/eth-batch-wallet-generator" draggable="false" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                        <div className="card rounded-4" style={{ backgroundColor: "#7C69EF", height: "370px", width:'95%', margin:"auto" }}>

                            <h2 className="card-title pt-8">
                                <Image src="/images/appsLogo/ethereum.png" alt="Kik" width={90} height={90} />
                            </h2>
                            <div className="card-body p-5">
                                <h3 className="" style={{ color: "white" }}>
                                    {_tr("Apps7Title")}
                                </h3>
                                <p className="mb-0" style={{ color: "white" }}>
                                    {_tr("Apps7Desc")}
                                </p>
                            </div>
                        </div>
                        </a>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default IkalasApps;