import React from 'react'
import "../Style/Blog.css"
import Blogimg from '../assets/Blogimg.jpg'
export default function Blog() {
    return (
        <>
            <div className='container blog'>
                <h1 className='blog-title'>Our Blog</h1>
                <div className='blog-border'></div>
                <p className='blog-p'>An insight the incredible experience in the world</p>
            </div>
            <div className='container blog-content'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 blog-img'>
                        <img src={Blogimg} className='Blogimg'></img>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        <div className='blog-subtitle'>
                            <div className='blog-subtitleh1'>
                                Beautiful Italy<br></br>
                                Let’s travel
                            </div>
                            <p className='blog-subp'>But I must explain to you how all this mistaken idea of denouncing pleasure
                                and praising pain was born and I will give you a complete account of the system and expound the
                                actual teachings of the great explorer of the truth, the master- builder of human happiness.
                                No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those
                                who do not know how to pursue pleasure rationally encounter consequences that are extremly painful.
                                Nor again is there anyone who loves or pursues.
                            </p>
                            <div className='btn-blog'>
                                <p className='btn-blogp'>Read More</p>
                                <i className="fa-solid fa-arrow-right arrow"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
