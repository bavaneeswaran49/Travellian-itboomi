import React from 'react'
import '../Style/Herosec.css'
import carosil1 from '../assets/carosil1.png'
import carosil2 from '../assets/carosil2.png'
export default function Herosec() {
  return (
    <>
      <div className='herobgimg'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-8  col-md-8 col-sm-12'>
              <h1 className='herobold'>
                Start your unforgettable journey with us.
              </h1>
              <p className='hero-para'>
                The best travel for your jouney begins now
              </p>
            </div>
            <div className='col-xl-4 col-lg-4  col-md-4 carosil'>
              <img src={carosil1} className='carosil1'></img>
              <img src={carosil2} className='carosil2'></img>
              <img src={carosil2} className='carosil3'></img>
              <img src={carosil2} className='carosil4'></img>
              <img src={carosil2} className='carosil5'></img>
            </div>
          </div>
          <div className='info-main'>
            <div className='info'>
              <div className='info-details'>
                <div className='d-flex gap-5'>
                  <div className='details'>
                    <label>DESTINATION</label><br></br>
                    <input placeholder='Dubai'></input>
                  </div>
                  <div className='details'>
                    <label>PERSON</label><br></br>
                    <input placeholder='4' type='number'></input>
                  </div>
                  <div className='details'>
                    <label>CHECK IN</label><br></br>
                    <input></input>
                  </div>
                  <div className='details'>
                    <label>CHECK OUT</label><br></br>
                    <input></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='info-details2'>
              <button className='info-btn'><p className='info-btn-p'>BOOK<br></br> NOW </p><div className='iicon'></div><i class="fa-solid fa-arrow-right-long long-icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
