import './index.css'

const ProjectDetailsCard = (props) => {

    const {projectDetails} = props
    const {imgUrl, description, price, area} = projectDetails

    console.log(projectDetails)

    return(
        <li className='project-details-card'>
            <img src={imgUrl} alt="plot" className='project-image' />
            <p className='project-description'>{description}</p>
            <div className='project-details-flex-container'>
                <p className='project-price'>{price}</p>
                <div className='feature-projects-section-line'></div>
                <p className='project-area'>{area}</p>
            </div>
        </li>
    )

}

export default ProjectDetailsCard