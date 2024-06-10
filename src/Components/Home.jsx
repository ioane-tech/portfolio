import React from 'react'
import {Link, NavLink} from "react-router-dom"
import {motion} from "framer-motion"
import Typed from "react-typed"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {


    const copyElementId = (element) => {
        const idToCopy = element.id;
        navigator.clipboard.writeText(idToCopy)
            .then(() => {
                toast("Phone number copyed",
                    {
                        position: toast.POSITION.BOTTOM_RIGHT
                    }
                )
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
        });
    };
  return (
    <motion.div
        className='Home_div'
        initial={{opacity:0,transition:"0.7s"}}
        animate={{opacity:1, transition:"0.7s"}}
        exit={{opacity:0, transition:"0.7s"}}
    >
        <ToastContainer/>
        <img 
            style={{width:'300px',marginTop:"80px",marginRight:'100px'}} 
            src='Rock.png'
        />
        
         <div className='home_container'>
            <img className='profile_bg' src='profileImageBg.png'/>
            {/* <img className='io_img' src="io.jpg" alt="" /> */}
                <h1 className='home_my_name'>
                    <p>Ioane Turmanidze</p>
                    <span className='home_frontend_deve'>
                        <span>Hello! I am </span>
                        <Typed 
                            strings={["Front-End Developer","Skilled In React.js"]}
                            typeSpeed={100}
                            backSpeed={70}
                            backDelay={1000}
                            loop
                        />
                    </span>
                    <p className='home_about'>
                        <p>🔹 Software engineer, expertise in React.js & Next.js</p> 
                        <p>🔹 front-end development lecturer</p>
                        <p>🔹 founder of card game "War arena"</p>
                    </p>


                  <div className='contact_container'>
                     <a href='https://www.linkedin.com/in/ioane-turmanidze-1259b7279/'>
                        <div className='Contacts'>
                            <img className='contact_images' src='icons8-linkedin-50.png'/>
                        </div> 
                    </a>
                     
                     <a href="https://github.com/ioane-tech">
                        <div className='Contacts'>
                            <img className='contact_images' src='icons8-github-50.png'/>
                        </div>
                    </a>  
                     <a href="https://www.facebook.com/ioane.turmanidze/">
                        <div className='Contacts'>
                            <img className='contact_images' src='icons8-facebook-50.png'/>
                        </div>
                     </a>
                     <div className='Contacts'>
                        <img
                            onClick={(e) => copyElementId(e.target)}
                            id="568 73 40 76" 
                            className='contact_images' 
                            src='icons8-phone-64.png'/>
                     </div>
                     <a href="mailto:ioaneturmanidze2004@gmail.com" target="_blank">
                        <div className='Contacts'>
                            <img className='contact_images' src='icons8-email-50.png'/>
                        </div>
                    </a>
                  </div>
                </h1>

         </div>
    </motion.div>
  )
}

export default Home