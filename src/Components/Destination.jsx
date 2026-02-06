import React, { useState, useEffect } from 'react'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../Style/Destination.css'
import img1 from '../assets/dgallary1.jpg'
import img2 from '../assets/dgallary2.jpg'
import img3 from '../assets/dgallary3.jpg'
import img4 from '../assets/dgallary4.jpg'

export default function Destination() {

    const images = [img1, img2, img3, img4,
        img4, img3, img2, img1]
    const itemsPerPage = 4

    const [page, setPage] = useState(0)

    const maxPage = Math.ceil(images.length / itemsPerPage) - 1

    const nextSlide = () => {
        if (page < maxPage) setPage(page + 1)
    }

    const prevSlide = () => {
        if (page > 0) setPage(page - 1)
    }

    const visibleImages = images.slice(
        page * itemsPerPage,
        page * itemsPerPage + itemsPerPage
    )

    return (
        <>
            <div className='container'>
                <div className='destination-topic'>
                    <div>
                        <h1 className='destination-heading'>Destination Gallery</h1>
                        <div className='destination-border'></div>
                        <p className='destination-p'>Our photo gallery on trip</p>
                    </div>

                    <div className='slider-btns'>
                        <div className='left' onClick={prevSlide}>
                            <img src={left} className='leftimg' />
                        </div>
                        <div className='right' onClick={nextSlide}>
                            <img src={right} className='rightimg' />
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper">
                    <div className="gslider">
                        {visibleImages.map((img, i) => (
                            <div className='gallary' key={i}>
                                <img src={img} className='gimg1' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
