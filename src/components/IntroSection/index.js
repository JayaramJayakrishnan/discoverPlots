import {RiArrowDropDownLine} from 'react-icons/ri'


import './index.css'

const IntroSection = () => (
    <div className='IntroSection'>
        <div className='rectangles-container'>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
        </div>
        <div className="IntroSection-content">
            <div className='image1'></div>
            <h1 className='IntroSection-caption'>Discover Your Perfect Plot Land</h1>
            <p className='price-text'>starting at</p>
            <p className='price-container'><span className='price'>₹3999</span>per.sqft</p>
            <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683874486/Star_1_qcb79p.png" alt="star" className='star-image' />

            <div className='search-container'>
                <input type="search" placeholder='Search area or location' className='search-input'/>
                <p className='search-filter'>₹ Budget <RiArrowDropDownLine className='filter-dropdown-icon'/> </p>
                <button type="button" className='search-button'>Search</button>
            </div>

            <div className='milestone-1'>
                <h1 className='milestone-number'>473k+</h1>
                <p className='milestone-text'>Happy Customers</p>
            </div>

            <div className='milestone-2'>
                <h1 className='milestone-number'>340k+</h1>
                <p className='milestone-text'>Landmark Near Chennai</p>
            </div>

            <div className='milestone-3'>
                <h1 className='milestone-number'>4.3m+</h1>
                <p className='milestone-text'>Sq.Feet Developed</p>
            </div>

            <div className='trending-projects-container'>
                <div className='trending-projects-heading'>
                    <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683870737/Vector_1_vmryay.png" alt="heart" className='trending-projects-heading-image' />
                    <p>Trending Projects</p>
                </div>

                <div className='trending-projects-image-container'>
                    <img src='https://res.cloudinary.com/drm4jcovm/image/upload/v1683870738/Rectangle_128_e6il6x.png' alt="trending project" className='trending-projects-image' />
                    <img src='https://res.cloudinary.com/drm4jcovm/image/upload/v1683870738/Rectangle_129_wvodoe.png' alt="trending project" className='trending-projects-image' />
                </div>
            </div>

            <p className='IntroSection-dummy-text'>
                Loreum ispum is the dummy text used to fill the content and the loreum used to fill the content and the loreum.
            </p>
        </div>
    </div>
)

export default IntroSection