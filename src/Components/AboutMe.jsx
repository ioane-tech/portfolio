import React from 'react'
import Typed from "react-typed"
function AboutMe() {
  return (
    <div>
     <div style={{height:'1px', marginTop:'200px'}} id='aboutMe'></div>
     <div className="container_header">
        <hr className="hr-line1" />
        <span className="hr-text">"About Me"</span>
        <hr className="hr-line2" />
     </div>

     <div className='about_text_div'>

       <div className='about_each_item'>
            <p className='about_item_headers'>
                Mindioo (social platform)
            </p>
            <p>
                <Typed 
                    strings={
                        [
                            `
                               🤝 Collaborating with backend developers, front end developers, and UI/UX designers to build and enhance a social platform.
                                🗓️ Participate in weekly meetings with developers and founders to discuss tasks and future plans.
                                🎨 Utilize Figma for designing and implementing website styles and interfaces.
                                📋 Use Trello for development planning, task management, and progress tracking.
                                💬 We use Slack for smooth communication.
                                👨🏼‍💻 Develop and maintain responsive and user-friendly web interfaces using Next.js.
                            `
                        ]
                    }
                    typeSpeed={4}
                />
            </p>   
       </div>

       <div className='about_each_item'>
         <p className='about_item_headers'>
           DarieX
         </p>
         <p>
            <Typed 
                strings={
                    [
                        `
                            🔹️ Leading the migration process from a well-established .NET desktop application to React.js. This application has undergone development over 12 years and is presently in the process of improving and releasing updates. Due to the ongoing migration, expecting a substantial boost in React.js mastery, more than doubling.📈
                            🔹️implementing modern practices for continuous integration & client-centric solutions.
                            🔹️Driving innovation, honing skills, and pushing software development boundaries.
                            🔹️Envisioning a potential business growth of 200%💸 for the company following the migration to the website.
                        `
                    ]
                }
                typeSpeed={7}
            />
         </p>
       </div>
        
           
        <div className='about_each_item'>
            <p className='about_item_headers'>
                SCSA (scientific cyber security asscociation)
            </p>   
            <p>
                    <Typed 
                        strings={
                            [
                                `
                                    🔹️ website consist of 20+ pages.📰 Developed user-centric React components, integrating top libraries and Rest API for seamless frontend-backend communication.
                                    🚀 Collaborated with the backend team, ensuring smooth integration of components for an enhanced application interface.
                                    🌐 Utilized Docker & GitLab for efficient development and deployment workflows.
                                    💭 Actively contributed in meetings, refining feature implementations to align with user needs.
                                    🔹️ Enhanced expertise by learning from a skilled
                                `
                            ]
                        }
                        typeSpeed={7}
                    />   
            </p>

        </div>


                   
        <div className='about_each_item'>
            <p className='about_item_headers'>
                LegendsHub
            </p>   
            <p>
                    <Typed 
                        strings={
                            [
                                `
                                    🔸Contributing to "LegendHub," a hub for League of Legends enthusiasts in Georgia's gaming scene.
                                    🤝Collaborating with a backend and front end developers.
                                    👁‍🗨Utilizing Figma for page styling, working closely with a UI/UX designer for a user-friendly experience.
                                    📞Maintaining seamless collaboration through regular meet calls to discuss tasks and stay aligned.
                                `
                            ]
                        }
                        typeSpeed={7}
                    />   
            </p>

        </div>
        
        <div className='about_each_item about_last_item'>
            <p className='about_item_headers'>
                Symmary:
            </p>  
            <Typed 
                strings={
                    [
                        `   
                            🔹 I am a software engineer specializing in web development, with expertise in React.js and Next.js. 
                            I have years of experience building responsive, user-friendly web applications.
                            🔹 I also teach front-end development, covering HTML, CSS, JavaScript, React.js, and Next.js. My teaching 
                            focuses on practical skills and real-world application.
                            🔹 Additionally, I am the founder of "War Arena," a card game currently in development. This project combines 
                            my passion for gaming with my technical skills.
                        `
                    ]
                }
                typeSpeed={4}
            />
        </div>

     </div>
    </div>
  )
}

export default AboutMe