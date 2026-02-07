import React from 'react'
import "../Style/Trip.css"
import img1 from '../assets/tripimg1.jpg'
import img2 from '../assets/tripimg2.jpg'
import img3 from '../assets/tripimg3.jpg'
export default function Trip() {
    return (
        <>
        <div  id='trip'>
            <div className='container tripp'>
                <div className='row'>
                    <div className=' col-lg-3'>
                        <h1 className='trip-h1'>Trip Planners</h1>
                        <div className='trip-border'></div>
                        <p className='trip-p'>20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>
                        <div className='box'>
                            <div className='box1'>
                            </div>
                            <div className='box2'>
                                <p className='box2-p'>View all trip plans</p>
                            </div>
                            <div className='box3'>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 tripimg'>
                        <img src={img1} className='tipimg1' />
                        <div className='trip-df'>
                            <p className='trip-para'>Guided Tour</p>
                            <p className='trip-para'>€99/Day</p>
                        </div>
                        <div className='trip-df1'>
                            <div className='trip-df2'>
                                <h3 className='trip-h3'>Rome City Tour</h3>
                                <div className='tstarmain'>
                                <i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i>
                            </div></div>
                            <div className='trip-df-p'>
                                <p className='trip-para'>7 Days tour</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 tripimg'>
                        <img src={img2} className='tipimg1' />
                        <div className='trip-df'>
                            <p className='trip-para'>Guided Tour</p>
                            <p className='trip-para'>€99/Day</p>
                        </div>
                        <div className='trip-df1'>
                            <div className='trip-df2'>
                                <h3 className='trip-h3'>Paris City Tour</h3>
                                <div className='tstarmain'>
                                    <i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i><i class="fa-solid fa-star tstar"></i>
                                </div></div>
                            <div className='trip-df-p'>
                                <p className='trip-para'>7 Days tour</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 tripimg'>
                        <img src={img3} className='tipimg1' />
                        <div className='trip-df'>
                            <p className='trip-para'>Guided Tour</p>
                            <p className='trip-para'>€99/Day</p>
                        </div>
                        <div className='trip-df1'>
                            <div className='trip-df2'>
                                <h3 className='trip-h3'>Barcelona Tour</h3>
                                <div className='tstarmain'>
                                    <i className="fa-solid fa-star tstar"></i><i className="fa-solid fa-star tstar"></i><i className="fa-solid fa-star tstar"></i><i className="fa-solid fa-star tstar"></i><i className="fa-solid fa-star tstar"></i>
                                </div>
                            </div>
                            <div className='trip-df-p'>
                                <p className='trip-para'>7 Days tour</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </>
    )
}
