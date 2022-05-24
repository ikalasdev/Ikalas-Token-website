import Link from 'next/link';
import { _tr } from "../services/translate"

const Timeline = () => {
    return (
        <div className="RoadmapContainer row text-light">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6">

                    <div className="section_heading text-center">
                        <h2 className="display-3 fw-bold text-white py-5">{_tr("RoadmapTitle")}</h2>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-11">

                    <div className="apland-timeline-area">

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p>{_tr("futur")}</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-address-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("september")}</h4>
                                            <p>{_tr("RoadmapText1")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim3 cardHeight" data-wow-delay="0.5s">
                                        <div className="timeline-icon"><i className="fa fa-archive" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("july")}</h4>
                                            <p>{_tr("RoadmapText2")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim4 cardHeight"  data-wow-delay="0.7s">
                                        <div className="timeline-icon"><i className="fa fa-address-book" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("june")}</h4>
                                            <p>{_tr("RoadmapText3")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area text-light">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s" >
                                <p >2022</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("may")}</h4>
                                            <p>{_tr("RoadmapText4")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-timeline-area">
                            <div className="timeline-date wow fadeInLeft anim1" data-wow-delay="0.1s">
                                <p>2021</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim2 cardHeight" data-wow-delay="0.3s">
                                        <div className="timeline-icon"><i className="fa fa-id-card" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("december")}</h4>
                                            <p>{_tr("RoadmapText5")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim3 cardHeight" data-wow-delay="0.5s">
                                        <div className="timeline-icon"><i className="fa fa-desktop" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("july")}</h4>
                                            <p>{_tr("RoadmapText6")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-timeline-content d-flex wow fadeInLeft anim4 cardHeight" height={100} data-wow-delay="0.7s" >
                                        <div className="timeline-icon"><i className="fa fa-picture-o" aria-hidden="true"></i></div>
                                        <div className="timeline-text d-flex row justify-content-between">
                                            <h4>{_tr("january")}</h4>
                                            <p>{_tr("RoadmapText7")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;