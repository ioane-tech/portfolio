import React, { useState } from 'react'
import Projects_object from './projects_object'
import ProjectsDdisplaer from "./ProjectsDisplaer"
function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((currentIndex === Projects_object.length - 1 ? 0 : currentIndex + 1));
    };
  
    const handleBack = () => {
      setCurrentIndex((currentIndex === 0 ? Projects_object.length - 1 : currentIndex - 1));
    };
  
    const currentProject = Projects_object[currentIndex];
  return (
    <div>
        <div className="container_header">
            <hr className="hr-line1" />
            <span className="hr-text">" Projects"</span>
            <hr className="hr-line2" />
            
        </div>

        <div className='projects_page_container'>

        <div className='projects_index_container'>
            <button className='index_buttons' onClick={()=>setCurrentIndex(0)}>1</button>
            <button className='index_buttons' onClick={()=>setCurrentIndex(1)}>2</button>
            <button className='index_buttons' onClick={()=>setCurrentIndex(2)}>3</button>
            <button className='index_buttons' onClick={()=>setCurrentIndex(3)}>4</button>
            <button className='index_buttons' onClick={()=>setCurrentIndex(4)}>5</button>
            <button className='index_buttons' onClick={()=>setCurrentIndex(5)}>6</button>
          </div>

          <div className='mywork_projects_container'>

              <ProjectsDdisplaer 
                img={currentProject.image} 
                label={currentProject.label}
                description = {currentProject.description} 
                link = {currentProject.link}
                key={currentProject.id}
              />

          </div>
        </div>
    </div>
  )
}

export default Projects