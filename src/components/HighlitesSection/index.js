import './index.css'

const HighlitesSection = () => {
    
    return(
    <div className='highlites-section'>
        <div className='rectangles-container'>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
        </div>

        <div className='highlites-section-content'>
            <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1684125664/Rectangle_152_gilb30.png" alt="highlites" className='highlites-section-image' />
            <div className='highlites-section-text-container'>
                <h1 className='highlites-section-heading'>Project Highlights</h1>
                
                <ul className="highlites-list-container">
                    <li className="highlites-list-item" id="highliteOne"> 
                        <p className="highlite-title" >Near to school</p>
                        <p className="highlite-decription">Loreum  ispum is the dummy text used to fill the contest and the loreum used to fill the content used to fill the content and the loreum."</p>
                    </li>
                    <li className="highlites-list-item" id="highliteTwo">
                        <p className="highlite-title" >Near to Hospital</p>
                        <p className="highlite-decription">Loreum  ispum is the dummy text used to fill the contest and the loreum used to fill the content used to fill the content and the loreum."</p>
                    </li>

                    <li className="highlites-list-item" id="highliteThree">  
                        <p className="highlite-title">Near to Station</p>
                        <p className="highlite-decription">Loreum  ispum is the dummy text used to fill the contest and the loreum used to fill the content used to fill the content and the loreum."</p> 
                    </li>
                </ul>
            </div>

            <div className='square-pattern-container highlites-square-position'>
                <div className='square-pattern'></div>
            </div>

            <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1684162720/Group_39787_bjgn8u.png" alt="arrow" className='arrow-image'/>
            <p className='arrow-label'>Next</p>

            <div className='ellipse-pattern-container highlites-ellipse-position'>
                <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1684068207/Ellipse_w96qm5.png" alt="ellipse" className='ellipse-pattern' />
            </div>
        </div>
    </div>
)}

export default HighlitesSection