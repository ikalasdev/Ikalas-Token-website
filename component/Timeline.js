import Link from 'next/link';
import { _tr } from "../services/translate"

const Timeline = () => {
    return (
        <div>
            <div className='d-flex'>
                <div>
                    <div className='bg-primary mx-auto LineLength ' style={{width:"2px"}}></div>
                    <h4 className=' p-4 my-5 border-primary' style={{border:"dashed 2px"}}>{_tr("futur")}</h4>
                    <div className='bg-primary mx-auto LineLength LineLengthMob' style={{width:"2px"}}></div>
                    <h4 className=' p-4 my-5 border-primary' style={{border:"dashed 2px"}}>2022</h4>
                    <div className='bg-primary mx-auto LineLength LineLengthMob' style={{width:"2px"}}></div>
                    <h4 className='p-4 my-5 border-primary' style={{border:"dashed 2px"}}>2021</h4>
                    <div className='bg-primary mx-auto LineLength ' style={{width:"2px"}}></div>
                </div>

                <div className="d-flex flex-column justify-content-around px-8">
                    <div className='py-6 text-left'>
                        <ul style={{color:"#335EEA", fontSize:'25px'}}>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("september")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText1")}</p>
                            </li>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("july")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText2")}</p>
                            </li>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("june")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText3")}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='py-5'>
                        <ul style={{color:"#335EEA", fontSize:'25px'}}>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("may")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText4")}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='py-5'>
                        <ul style={{color:"#335EEA", fontSize:'25px'}}>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("december")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText5")}</p>
                            </li>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("july")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText6")}</p>
                            </li>
                            <li style={{textAlign :"start"}}>
                                <h4 className='' style={{fontSize:"22px", fontWeight:"bold"}}>{_tr("january")}</h4>
                                <p className='text-muted' style={{fontSize:"15px"}}>{_tr("RoadmapText7")}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Timeline;