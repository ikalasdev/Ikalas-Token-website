import React, { useState } from "react"
import Slider from "react-slick";
import { _tr } from "../services/translate"



const News = () => {
        const settings = {
          dots: true,
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
   

    return (
        <>
            <Slider {...settings}>
                    <div className="keen-slider__slide number-slide1 d-flex flex-column justify-content-center">
                        <h3 className="display-5 fw-bold text-dark">20/05/2022</h3>
                        <img src="/assets/img/screenshots/news/news1.jpg" alt="news1" className="img-fluid rounded" width={200} />
                        <span className="text-muted lead" style={{fontSize:"25px"}}>{_tr("NewsText1")}</span>
                        <a className="text-info lead" href="https://www.kik-token.com/fr" target="_blank" rel="noreferrer" style={{fontSize:"25px"}}>Go on the website</a>
                    </div>
                    <div className="keen-slider__slide number-slide2 d-flex flex-column justify-content-center">
                        <h3 className="display-5 fw-bold text-dark">05/2022</h3>
                        <img src="/assets/img/screenshots/news/news2.jpg" alt="news1" className="img-fluid rounded" width={500} />
                        <span className="text-muted lead" style={{fontSize:"25px"}}>{_tr("NewsText2")}</span>
                        <a className="text-info lead" href="https://ikalas.com/app/create-token-on-bsc" target="_blank"  style={{fontSize:"25px"}}>Go to this module</a>
                    </div>
                    <div className="keen-slider__slide number-slide3  d-flex flex-column justify-content-center">
                        <h3 className="display-5 fw-bold text-dark">12/2021</h3>
                        <img src="/assets/img/screenshots/news/news3.jpg" alt="news1" className="img-fluid rounded" width={480} />
                        <span className="text-muted lead" style={{fontSize:"25px"}}>{_tr("NewsText3")}</span>
                        <a className="text-info lead" href="https://ikalas.com/app/matic-token-multisender" target="_blank" rel="noreferrer" style={{fontSize:"25px"}}>Go to this module</a>
                    </div>
                    <div className="keen-slider__slide number-slide4  d-flex flex-column justify-content-center">
                        <h3 className="display-5 fw-bold text-dark">07/2021</h3>
                        <img src="/assets/img/screenshots/news/news4.jpg" alt="news1" className="img-fluid rounded" width={400} />
                        <span className="text-muted lead" style={{fontSize:"25px"}}>{_tr("NewsText4")}</span>
                        <a className="text-info lead" href="https://ikalas.com/app/bsc-token-multisender" target="_blank" rel="noreferrer" style={{fontSize:"25px"}}>Go to this module</a>
                    </div>
                    <div className="keen-slider__slide number-slide5  d-flex flex-column justify-content-center">
                        <h3 className="display-5 fw-bold text-dark">01/2021</h3>
                        <img src="/assets/img/screenshots/news/news5.jpg" alt="news1" className="img-fluid rounded" width={500} />
                        <span className="text-muted lead" style={{fontSize:"25px"}}>{_tr("NewsText5")}</span>
                        <a className="text-info lead" href="https://ikalas.com/app" target="_blank" rel="noreferrer" style={{fontSize:"25px"}}>Go on Ikalas</a>
                    </div>
                </Slider>
        </>
    )
};
                

export default News;