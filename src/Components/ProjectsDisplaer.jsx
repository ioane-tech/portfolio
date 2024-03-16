import React from 'react'
import Typed from "react-typed"
function ProjectsDisplaer({img,label,description,link}) {
  return (
    <div>
        <div className='work_imgs_div'>
          <div className='work_imgs_label'>
            <p className='work_imgs_img_link_label'>
              <a href={link}>
                <Typed 
                  strings={
                    [
                      `${label}`
                    ]
                  }
                  typeSpeed={70}
                />
                </a>
            </p>

            <a className='description_link' href={link}>
              <div className='project_description'>
                  <Typed 
                    strings={
                      [
                        `${description}`
                      ]
                    }
                    typeSpeed={15}
                  />
              </div>
            </a>
          </div>
          <div className=''>
            <a href={link}>
              <img className='work_imgs_image' src={img} width="100%" height="250px"/>
            </a>
          </div>

        </div>
    </div>
  )
}

export default ProjectsDisplaer