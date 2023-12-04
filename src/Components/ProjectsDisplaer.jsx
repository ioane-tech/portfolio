import React from 'react'
import Typed from "react-typed"
function ProjectsDisplaer({img,label}) {
  return (
    <div>
        <div className='work_imgs_div'>
          <div className='work_imgs_label'>
            <p className='work_imgs_img_link_label'>
              <Typed 
                strings={
                  [
                    `${label}`
                  ]
                }
                typeSpeed={70}
              />
          </p>
          </div>
          <div className=''>
              <img className='work_imgs_image' src={img} width="100%" height="250px"/>
          </div>

        </div>
    </div>
  )
}

export default ProjectsDisplaer