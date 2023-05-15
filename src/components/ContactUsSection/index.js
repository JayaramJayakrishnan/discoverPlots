import './index.css'

const ContactUsSection = () => (
    <div className='contact-us-section'>
        <div className='contact-us-section-content'>
            <div className='circles-bg-container'>
                <div className='outer-circle'>
                    <div className='inner-circle'></div>
                </div>
            </div>

            <h1 className='contact-us-section-heading'>Curious about our land plot offerings in Chennai? Contact us today</h1>

            <button className='schedule-call-button'>Schedule a Call</button>

            <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683907551/Vector_3_t4m5dk.png" alt="pattern" className='contact-us-section-pattern' />

            <div className='ellipse-pattern-container contact-us-ellipse-position'>
                <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1684068207/Ellipse_w96qm5.png" alt="ellipse" className='ellipse-pattern' />
            </div>
        </div>
    </div>
)

export default ContactUsSection