import React, { useState, useEffect } from 'react'
import left from '../assets/left.png'
import right from '../assets/right.png'
import '../Style/Destination.css'
import img1 from '../assets/dgallary1.jpg'
import img2 from '../assets/dgallary2.jpg'
import img3 from '../assets/dgallary3.jpg'
import img4 from '../assets/dgallary4.jpg'

export default function Destination() {

  const images = [img1, img2, img3, img4, img4, img3, img2, img1]

  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(4)
      }
      setIndex(0) 
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = images.length - itemsPerView

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1)
  }

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
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
        <div
          className="gslider"
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`
          }}
        >
          {images.map((img, i) => (
            <div
              className='gallary'
              key={i}
              style={{ minWidth: `${100 / itemsPerView}%` }}
            >
              <img src={img} className='gimg1' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
