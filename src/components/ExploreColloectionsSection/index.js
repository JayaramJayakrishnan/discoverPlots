import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './index.css'

const logosList = [
    {
        id: "IBT",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683876419/download_ghh62w.png"
    },

    {
        id: "MW",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683876494/download_4_cpbzfg.png"
    },

    {
        id: "FRB",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683876419/download_1_vshoym.png"
    },
    
    {
        id: "YHO",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683876419/download_2_hb87fi.png"
    },

    {
        id: "TB",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683876419/download_3_jhlryv.png"
    },
]

const plotTypes = ["Corner Plots", "East Facing", "Boundary Walls"]

const plotsList = [
        {
            id: uuidv4(),
            category: "Corner Plots",
            imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683889271/Rectangle_131_ahc541.png",
        },

        {
            id: uuidv4(),
            category: "Corner Plots",
            imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683889271/Rectangle_134_c0crxl.png",
        },

        {
            id: uuidv4(),
            category: "Corner Plots",
            imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683889270/Rectangle_133_chtbjn.png",
        },
   
        {
            id: uuidv4(),
            category: "East Facing",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AxrVSsZJ2jKJXLpAk4Ypy7PsQHaBTH_FoQ&usqp=CAU"
        },

        {
            id: uuidv4(),
            category: "East Facing",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BRDZ3ji6Er4I-7qzztt1mLoM0v4isqINQg&usqp=CAU"
        },

        {
            id: uuidv4(),
            category: "East Facing",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7IoGnfmC2ZcVQqKcoog3APYa4tU0YtmVOQ&usqp=CAU"
        },
    
        {
            id: uuidv4(),
            category: "Boundary Walls",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78OzLQ91mT_356nQbbQKAuRGkKj2aa2lapA&usqp=CAU"
        },

        {
            id: uuidv4(),
            category: "Boundary Walls",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCX3tYG1zZ_WB_i87Dz6Y-ioQ_2ASY0vUtw&usqp=CAU"
        },

        {
            id: uuidv4(),
            category: "Boundary Walls",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBxVaGvA0FCMPkH0lahhItp3V9X67GIqgYA&usqp=CAU"
        }
]


const ExploreColloectionsSection = () => {
    
    const [selectedPlotType, setPlotType] = useState(plotTypes[0])

    const onClickSection = () => {
        const index = plotTypes.indexOf(selectedPlotType)
        if (index === 2) {
            setPlotType(plotTypes[0])
        }
        else {
            setPlotType(plotTypes[index + 1])
        }
    }

    const selectedPlotList = plotsList.filter((item) => item.category === selectedPlotType)

    return(
    <div className="ExploreColloectionsSection">
        <div className="ExploreColloectionsSection-content">
            <ul className='logos-container'>
            {logosList.map((item) => (
                <li key={item.id}>
                    <img src={item.imgUrl} alt="logo" className='ExploreColloectionsSection-logo' />
                </li>)
            )}
            </ul>

            <div className='explore-section' onClick={onClickSection}>
                <div>
                    <p className='explore-section-heading'>Explore Our Collections</p>

                    <div className='explore-section-pattern'>
                        <div className='pattern-line'></div>
                        <div className='pattern-image-text'>
                            <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683885277/31_jf5zw0.png" alt="pattern" className='pattern-image' />
                            <p className='pattern-text'>{selectedPlotType}</p>
                        </div>
                        <div className='pattern-line'></div>
                    </div>                   
                </div>

                <ul  className='explore-section-image-container'>
                  {selectedPlotList.map(item => (
                    <li key={item.id} className='explore-section-list-item fade-in'>
                        <img src={item.imgUrl} alt="corner plot" className='explore-section-image' />
                    </li>
                  ))}

                  <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683889044/Union_hj7atl.png" alt="ellipse" className='ellipse-left'/>
                  <img src="https://res.cloudinary.com/drm4jcovm/image/upload/v1683889044/Union_hj7atl.png" alt="ellipse" className='ellipse-right'/>
               </ul>
            </div>

            <p className='explore-more-link'><AiOutlineArrowRight /> Explore More</p>
        </div>
    </div>
)}

export default ExploreColloectionsSection