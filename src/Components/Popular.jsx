import React, { useState, useEffect } from 'react'
import "../Style/Popular.css"
import left from "../assets/left.png"
import right from '../assets/right.png'
import img1 from '../assets/popularimg1.jpg'
import img2 from '../assets/popularimg2.jpg'
import img3 from '../assets/popularimg3.jpg'
import img4 from '../assets/popularimg4.jpg'

export default function Popular() {

    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(4)

  
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) setVisible(1)
            else if (window.innerWidth < 992) setVisible(2)
            else setVisible(4)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalCards = 10
    const maxIndex = totalCards - visible

    const next = () => {
        if (index < maxIndex) setIndex(index + 1)
    }

    const prev = () => {
        if (index > 0) setIndex(index - 1)
    }

    return (
        <>
            <div className='container popular ' id='explore'>
                <div className='destination-topic'>
                    <div>
                        <h1 className='destination-heading'>Popular Destinations</h1>
                        <div className='destination-border'></div>
                        <p className='destination-p'>
                            Most popular destinations around the world, from historical places to natural wonders.
                        </p>
                    </div>

                    <div className='slider-btns'>
                        <div className='left' onClick={prev}>
                            <img src={left} className='leftimg' />
                        </div>
                        <div className='right' onClick={next}>
                            <img src={right} className='rightimg' />
                        </div>
                    </div>
                </div>
            </div>

           
            <div className='container popular-img' style={{ overflow: "hidden" }}>
                <div
                    className='row'
                    style={{
                        transform: `translateX(-${index * (100 / visible)}%)`,
                        transition: "0.5s ease",
                        flexWrap: "nowrap"
                    }}
                >
                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img1} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Monument of Berlin</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img2} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Monument of Berlin</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img3} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Rialto Bridge</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img4} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Sea of Orange Tiles</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>
                     <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img1} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Monument of Berlin</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img2} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Monument of Berlin</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img3} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Rialto Bridge</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={img4} className='pop-img1' alt='no-img' />
                        <p className='popular-p'>Sea of Orange Tiles</p>
                        <div className='popular-df'>
                            <i className="fa-solid fa-location-dot picon"></i>
                            <p className='popular-para'>Berlin, Germany</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
