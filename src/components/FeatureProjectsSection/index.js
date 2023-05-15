import {v4 as uuidv4} from 'uuid'
import {GrNext, GrPrevious} from 'react-icons/gr'

import ProjectDetailsCard from '../ProjectDetailsCard'

import './index.css'

const projectLocations = [
    {
        id: uuidv4(),
        location: "Egmore"
    },

    {
        id: uuidv4(),
        location: "Koyambedu"
    },

    {
        id: uuidv4(),
        location: "Sholinganallur"
    },

    {
        id: uuidv4(),
        location: "Cholaimedu"
    },

    {
        id: uuidv4(),
        location: "Greems Road"
    },

    {
        id: uuidv4(),
        location: "Royapettah"
    }
]

const featureProjectsData = [
    {
        id: uuidv4(),
        location: "Egmore",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683986609/Rectangle_143_ynumt1.png",
        description: "Loreum ispum is the dummmy text used to fill the.",
        price: "$16,471",
        area: "2088 sqft."
    },

    {
        id: uuidv4(),
        location: "Egmore",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683986609/Rectangle_144_rrwsoz.png",
        description: "Loreum ispum is the dummmy text used to fill the.",
        price: "$16,471",
        area: "2088 sqft."
    },

    {
        id: uuidv4(),
        location: "Egmore",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683986609/Rectangle_145_tr6oh2.png",
        description: "Loreum ispum is the dummmy text used to fill the.",
        price: "$16,471",
        area: "2088 sqft."
    },

    {
        id: uuidv4(),
        location: "Egmore",
        imgUrl: "https://res.cloudinary.com/drm4jcovm/image/upload/v1683986609/Rectangle_147_a1uxlv.png",
        description: "Loreum ispum is the dummmy text used to fill the.",
        price: "$16,471",
        area: "2088 sqft."
    }
]


const FeatureProjectsSection = () => (
    <div className="feature-projects-section">
        <div className="feature-projects-section-content">
            <h1 className="feature-projects-section-heading">Feature Projects</h1>

            <div className='feature-projects-section-flex-container'>
                <ul className='feature-projects-section-locations-container'>
                    {projectLocations.map(item => (
                        <li className={item.location === "Egmore" ? 'feature-projects-section-location active-location' :
                         "feature-projects-section-location" } key={item.id}>
                            {item.location}
                        </li>)
                    )}
                </ul>

                <div className='navigation-button-container'>
                    <button type="button" className='navigation-button'>
                        <GrPrevious/>
                    </button>
                    <button type="button" className='navigation-button active-button'>
                        <GrNext />
                    </button>
                </div>
            </div>

            <ul className='project-details-container'>
                {featureProjectsData.map(item => <ProjectDetailsCard projectDetails={item} key={item.id}/>)}
            </ul>
        </div>
    </div>
)

export default FeatureProjectsSection