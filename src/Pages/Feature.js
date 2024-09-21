import React from 'react'
import myImages from './Images'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/slick.css"
import "../Style/slick-theme.css"
import '../Style/Popular.css'
import '../Style/Location.css'
import HouseList from './HouseList';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", fontsize: "300px" }}
            onClick={onClick}
        />
    );
}

const Featured = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='popular-section'>
            <div className='houseHead'>Featured Home</div>
            <div className='houseSubHead'>Our offerings are tailored to meet your needs and suit your lifestyle.</div>
            <div className='houses'>
                <Slider {...settings}>

                    {/* ///////////////////////////////////////////////////////////////// */}
                    <HouseList />
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    <div className='popular-hostel'>
                        <div className='house-img'>
                            <img src={myImages.hostelImage} alt='img of house' />
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
                    {/* ///////////////////////////////////////////////////////////////////////////////// */}

                </Slider>
            </div>
        </div>
    )
}

export default Featured;