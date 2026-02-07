import React, { useState, useEffect } from 'react'
import '../Style/Travel.css'
import left from '../assets/left.png'
import right from '../assets/right.png'
import img1 from '../assets/travelimg1.png'
import img2 from '../assets/travelimg2.png'
import img3 from '../assets/travelimg3.png'

export default function Travel() {

  const cards = [
    { img: img1, name: "John Doe", role: "Accountant" },
    { img: img2, name: "John Smith", role: "Journalist, HWO News" },
    { img: img1, name: "John Doe", role: "Accountant" },
    { img: img2, name: "John Smith", role: "Journalist, HWO News" },
    { img: img3, name: "Tamara Bellis", role: "Managing Director, JTH" },
  ]

  const [index, setIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 992) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = cards.length - cardsPerView

  const next = () => {
    if (index < maxIndex) setIndex(index + 1)
  }

  const prev = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
     
      <div className='container '>
        <h1 className='destination-heading'>Traveler’s Experiences</h1>
        <div className='destinetion-border'></div> 
        <p className='destination-p'>Here some awesome feedback from our travelers</p>
      </div>

     
      <div className='container travel-slider'>
        <div
          className='travel-track'
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`
          }}
        >
          {cards.map((item, i) => (
            <div className='travel-slide' key={i}>
              <div className='travel-col'>
                <img src={item.img} className='timg1' />
                <p className='travelmain-p'>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
                </p>
                <div className='oicon-d d-flex gap-2'>
                  <i className="fa-solid fa-star oicon"></i>
                  <i className="fa-solid fa-star oicon"></i>
                  <i className="fa-solid fa-star oicon"></i>
                  <i className="fa-solid fa-star oicon"></i>
                  <i className="fa-solid fa-star oicon"></i>
                </div>
                <h4 className='travelh4'>{item.name}</h4>
                <p className='travel-p'>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className='container slider-btns slider-btn-df'>
        <div className='left' onClick={prev}>
          <img src={left} className='leftimg' />
        </div>
        <div className='right' onClick={next}>
          <img src={right} className='rightimg' />
        </div>
      </div>
    </>
  )
}
