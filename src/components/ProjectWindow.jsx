import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProjectsContainer from '../components/ProjectsContainer.astro'; 

const ProjectWindow = ({ currentPage }) => {
    return (
        <>
            {currentPage === '/projects' ? (
                <ProjectsContainer/>
            ) : (
                <div>Other content or nothing to render</div> 
            )}
        </>
    );
};

export default ProjectWindow;
