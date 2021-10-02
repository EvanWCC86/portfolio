import React from 'react'
import ProjectCard from './ProjectCard';
import {projectsData} from '../data/projectsData'
const AllProjects = () => {

    
    return (
        <section className="projectsSection">
            <h2>Projects</h2>
            <div className="projects_container">
                {projectsData.map((item) => (
                    <ProjectCard item={item} key={item.id} />
                ))}
            </div>
            {/* <div>
                <iframe src="https://www.evanwebrecipes.com" name="website" title="example" width="500px" height="500px"></iframe>
            </div> */}
        </section>
    )
}

export default AllProjects
