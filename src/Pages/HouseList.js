import React from 'react'
import myImages from './Images'
import HouseListImg from './HouseListImg'

const HouseList = () => {
    return (
        <div className='popular-hostel'>
            <div className='house-img'>
                {/* <img src={myImages.hostelImage} alt='img of house' /> */}
                <HouseListImg />
                <div className='saveicon'>
                    <img src={myImages.saveIcon} alt='save' />
                </div>
                <div className='payment-type'>for sale</div>
            </div>
            <div className='house-info'>
                <div className='price-rating'>
                    <div className='price'>N500,000,0000</div>
                    <div className='ratings'>
                        <img src={myImages.subMenuIcon} alt='sub menu' />

                    </div>
                </div>
                <div className='housing-info'>4 bed - 4 baths -  Private Apartment</div>
                <div className='house-address'>4 Admiralty Way, Lekki Phase 1, Lagos</div>
            </div>
        </div>
    )
}
export default HouseList