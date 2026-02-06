import React from 'react'
import '../Style/Travel.css'
import left from '../assets/left.png'
import right from '../assets/right.png'
import img1 from '../assets/travelimg1.png'
import img2 from '../assets/travelimg2.png'
import img3 from '../assets/travelimg3.png'
export default function Travel() {
    return (
        <>
            {/* heading */}
            <div className='container'>
                <div className='destination-topic'>
                    <div>
                        <h1 className='destination-heading'>
                            Traveler’s Experiences
                        </h1>
                        <div className='destination-border'></div>
                        <p className='destination-p'>Here some awesome feedback from our travelers</p>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className='container travel-container'>
                <div className=' row  '>
                    <div className='col-lg-4 t-col'>
                        <div className='travel-col'>
                            <img src={img1} className='timg1'></img>
                            <p className='travelmain-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>
                            <div className='oicon-d d-flex gap-2'>
                                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
                            </div>
                            <h4 className='travelh4'>
                                John Doe
                            </h4>
                            <p className='travel-p'>Accountant</p></div>
                    </div>
                    <div className='col-lg-4 t-col'>
                        <div className='travel-col'>
                            <img src={img2} className='timg1'></img>
                            <p className='travelmain-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>
                            <div className='oicon-d d-flex gap-2'>
                                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
                            </div>
                            <h4 className='travelh4'>
                                John Smith
                            </h4>
                            <p className='travel-p'>Journalist, HWO News</p></div>
                    </div>
                    <div className='col-lg-4 t-col'>
                        <div className=' travel-col '>
                            <img src={img1} className='timg1'></img>
                            <p className='travelmain-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>
                            <div className='oicon-d d-flex gap-2'>
                                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
                            </div>
                            <h4 className='travelh4'> Tamara Bellis</h4>
                            <p className='travel-p'>Managing Director, JTH</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider-btns */}
            <div className='container slider-btns slider-btn-df'>
                <div className='left'>
                    <img src={left} className='leftimg' />
                </div>
                <div className='right'>
                    <img src={right} className='rightimg' />
                </div>
            </div>
        </>
    )
}
