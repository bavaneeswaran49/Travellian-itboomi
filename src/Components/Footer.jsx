import React from 'react'
import '../Style/Footer.css'
import logo from '../assets/Logo.png'
export default function Footer() {
    return (
        <>
            <div className='subcenter'>
                <div className=' leter-sub'>
                    <div className='container letter'>
                        <div className='row'>
                            <div className=' col-xl-6  col-lg-6 col-md-12 col-sm-12'>
                                <h2 className='leter-subh1'>Our Newsletter</h2>
                            </div>
                            <div className='leter-subf  col-xl-6  col-lg-6 col-md-12 col-sm-12'>
                                <div className='letter-email'>
                                    <div className='leter-e'>
                                        <p className='leter-ep'>Email</p>
                                        <input placeholder='Enetr your email' className='leter-input'></input>
                                    </div></div>
                                <div className='leter-ebtn'>
                                    <button className='subscribe'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-main'>
                <div className='container'>
                    <div className='row footer-maininner'>
                        <div className='col-lg-4 footer-sub'>
                            <img src={logo}></img>
                            <p className='footer-p'>Copyright © Travellian 2020 All rights reserved</p>
                        </div>
                        <div className='col-lg-2 footer-sub'>
                            <p className='footer-title'>Menu</p>
                            <a href='#hero'className='foota'><p className='footer-p'>Home</p></a>
                            <a href='#explore'className='foota'><p className='footer-p'>Explore</p></a>
                            <a href='#travel'className='foota'><p className='footer-p'>Travel</p></a>
                            <a href='#blog'className='foota'><p className='footer-p'>Blog</p></a>
                            <a href='#trip'className='foota'><p className='footer-p'>Pricing</p></a>
                        </div>
                        <div className='col-lg-2 footer-sub'>
                            <p className='footer-title'>Information </p>
                            <p className='footer-p'>Destinations</p>
                            <p className='footer-p'>Supports</p>
                            <p className='footer-p'>Terms & Conditions</p>
                            <p className='footer-p'>Privacy</p>
                        </div>
                        <div className='col-lg-2 footer-sub'>
                            <p className='footer-title'>Contact Info</p>
                            <p className='footer-p'>+123 456 789</p>
                            <p className='footer-p'>info@travellian.com</p>
                            <p className='footer-p'>1245, New Yourk, USA</p>
                        </div>
                        <div className='col-lg-2 footer-sub'>
                            <p className='footer-title'>Follow us on </p>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-facebook ficon"></i>
                                <i className="fa-brands fa-pinterest ficon"></i>
                                <i className="fa-brands fa-instagram ficon"></i>
                                <i className="fa-brands fa-twitter ficon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
