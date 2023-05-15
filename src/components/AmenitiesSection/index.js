import './index.css'

const AmenitiesSection = () => (
    <div className='amenities-section'>
        <div className='rectangles-container'>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
        </div>

        <h1 className='amenities-section-heading'>Project Amenities</h1>

        <ul className='amenities-list-container'>
            <li>
                <p className='amenities'>Childrens Play Arena</p>
                <img src="https://media.istockphoto.com/id/473313240/photo/children-playing-in-the-park-at-playground-and-communicating.jpg?s=612x612&w=0&k=20&c=eMpRprDUvFC35nYizsBKlUPiIU9aDt8v9bKzu-ZQagI=" alt="amenities" className='amenities-image'/>
            </li>

            <li>
                <p className='amenities'>Street Lights</p>
                <img src="https://www.endeavourenergy.com.au/__data/assets/image/0020/5591/Streetlights-and-unmetered-supplies-thumbnail.png" alt="amenities" className='amenities-image'/>
            </li>

            <li>
                <p className='amenities'>24 X 7 Security</p>
                <img src="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2022/10/bigstock_Security_Guard_Officer_Standin_379796272.635ffc9073fdb.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630" alt="amenities" className='amenities-image'/>
            </li>

            <li>
                <p className='amenities'>Avenue Trees</p>
                <img src="https://5.imimg.com/data5/SELLER/Default/2020/12/EG/BV/VL/22662015/avenue-trees-1000x1000.jpg" alt="amenities" className='amenities-image'/>
            </li> 
        </ul>

        <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683907548/Vector_2_cbxxot.png" alt="pattern" className='amenities-section-pattern1' />
        <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683907551/Vector_3_t4m5dk.png" alt="pattern" className='amenities-section-pattern2' />

    </div>
)

export default AmenitiesSection