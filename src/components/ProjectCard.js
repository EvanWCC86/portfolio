import React from 'react'

const ProjectCard = ({item}) => {
    const {websiteUrl,skilles,name} = item
    return (
        <feature className="project_card">
            {/* use ifram such as <iframe src="website"></iframe> */}
            {/* <img src={image} alt={title} /> */}
            <div className="image_container">
                <iframe className="iframe_image" src={websiteUrl}title={name}></iframe>
            </div>
            <figcaption className="card_content">
                <h3>{name}</h3>
                <div className="card_skilles">
                    <h4>Skills used:</h4>
                    {skilles.map((skill, index) => (
                        <span key={index}>{skill}</span>
                    ))}
                </div>
                <a className="btn-web" href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    go to website
                </a>
            </figcaption>
        
        </feature>
    )
}

export default ProjectCard
