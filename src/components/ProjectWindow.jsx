import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProjectsContainer from './ProjectsContainer.astro';


const ProjectWindow = ( {currentPage} ) => {
    return (
        <>
        {currentPage === '/projects' ? (
            <>
                <ProjectsContainer />
            </>
        ) : (
          <>
            
          </> // Or something else you want to render
        )}
      </>
        
    );

  
};



export default ProjectWindow;