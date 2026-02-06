import left from '../assets/left.png'
import right from '../assets/right.png'
import img1 from '../assets/offerimg1.jpg'
import img2 from '../assets/offerimg2.jpg'
import img3 from '../assets/offerimg3.jpg'
import React, { useState, useEffect } from 'react'
import "../Style/Offer.css"

export default function Offer() {

  const [index, setIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(360)
  const [visibleCards, setVisibleCards] = useState(3)

  const totalCards = 9
  const maxIndex = totalCards - visibleCards

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setCardWidth(300)
        setVisibleCards(1)
      } else if (window.innerWidth <= 991) {
        setCardWidth(320)
        setVisibleCards(2)
      } else {
        setCardWidth(360)
        setVisibleCards(3)
      }
      setIndex(0)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1)
  }

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <>
      <div className='offer-container container'>
        <div className='offer'>
          <div className='slider-btns'>
            <div className='left' onClick={prevSlide}>
              <img src={left} className='leftimg'></img>
            </div>
            <div className='right' onClick={nextSlide}>
              <img src={right} className='rightimg'></img>
            </div>
          </div>
          <div className='slider-topic'>
            <div>
              <h1 className='slider-heading'>
                Special Offer
              </h1>
              <div className='heading-border'></div>
              <p className='offer-p'>Check out our special offer and discounts</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container slider-wrapper'>
        <div
          className='slider-track'
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >

          <div className='slider-card'>
            <img src={img1} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Lisbon, Portugal</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>500</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-card'>
            <img src={img2} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Rome, Italy</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>800</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-card'>
            <img src={img3} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Athens, Greece</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>750</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-card'>
            <img src={img1} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Lisbon, Portugal</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>500</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-card'>
            <img src={img3} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Athens, Greece</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>750</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-card'>
            <img src={img2} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Rome, Italy</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>800</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-card'>
            <img src={img1} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Lisbon, Portugal</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>500</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-card'>
            <img src={img2} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Rome, Italy</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>800</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider-card'>
            <img src={img3} />
            <div className='offer-cont'>
              <h4 className='offer-h4'>Athens, Greece</h4>
              <div className='oicon-d d-flex gap-2'>
                <i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i><i class="fa-solid fa-star oicon"></i>
              </div>
              <p className='offer-para'>5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.</p>
              <div className='rate-details'>
                <div className='rate'>
                  <p className='offer-para'>From<span className='offer-span'><i class="fa-solid fa-euro-sign"></i>750</span></p>
                </div>
                <div className='details'>
                  <div className='btn-detail'>
                    DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
