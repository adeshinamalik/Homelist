import React from 'react'
import '../Style/Purpose.css'
import myImages from './Images'
const Purpose = () => {
    return (
        <div className='purpose' id='about'>
            <div className='purpose-text'>
                <div className='purpose-headings'>We provide you with all the essentials for your home search</div>
                <div className='purpose-sub-headings'>Our offerings are tailored to make your home search easier</div>
            </div>
            {/*  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                //////////////////////////////////////////////////////// */}
            <div className='purpose-feature'>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Flexible Housing</h3>
                    <p>From shared spaces, to private spaces
                        and even owned spaces, QT homes
                        provides you an array of options to
                        make your home search more
                        seamless.</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Services Connect</h3>
                    <p>We give you access to transparent
                        market information, financing and
                        connect you to full suite home services
                        such as security, maintenance,
                        cleaning, cooking etc</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Facility Management</h3>
                    <p>Your homes are properly managed by
                        our pool of experts, that ensure the
                        safety and efficiency of facilities in
                        your home.</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Verified Agents</h3>
                    <p>You get only the best from us. Our
                        agents are verified, reliable,
                        trustworthy and ensure that every
                        home you’re exposed to meets your
                        standard.</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Flexible leasing</h3>
                    <p>Our offerings are tailored to your
                        needs. Take control of how you want
                        to live.</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div className='purpose-items'>
                    <img src={myImages.homeIcon} alt='home icon' />
                    <h3 className='header3'>Support</h3>
                    <p>We are with you all the way. Our
                        support team is dedicated to ensuring
                        you get the most out of your property
                        and to resolve challenges, if any.</p>
                </div>
                {/* ///////////////////////////////////////////////////// */}

                {/* ///////////////////////////////////////////////////// */}
            </div>
        </div>
    )
}

export default Purpose