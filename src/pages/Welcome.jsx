import Container from "../components/Container"
import { Link } from "react-router"
import LinkButton from "../components/LinkButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { hover, motion } from "motion/react"
import Nav from "../components/Nav"
import SideNav from "../components/SideNav"
import Footer from "../components/Footer"



export default function Welcome(){

const hover = "hover:text-secondary ease-out duration-1000 hover:text-11xl"

    return(
        <>
        <Nav></Nav>
        <SideNav></SideNav>
        <Container>
            <div className="flex justify-center h-screen flex-col p-0 -mt-10 gap-10">
                <div className="flex justify-center flex-col p-0 m-0 cursor-default">
                    <p className="text-xl text-secondary ">Hi there, I am</p>
                    <p className="text-9xl sm:text-big font-bebas -mb-5"><span className={hover}>K</span><span className={hover}>I</span><span className={hover}>M</span> <span className={hover}>T</span><span className={hover}>E</span><span className={hover}>R</span><span className={hover}>R</span><span className={hover}>E</span><span className={hover}>N</span><span className={hover}>C</span><span className={hover}>E</span></p>
                    <p className="text-6xl opacity-70 font-bold pb-3">Let me build web stuff for you.</p>
                    <i className="text-xl opacity-70"><span className="text-secondary">{'< '}</span>A Web Developer who loves to turn ideas into reality through web development. <span className="text-secondary">{' />'}</span></i>
                </div>
                <div className="flex gap-5 items-center relative">
                    <motion.div className="absolute"
                    animate={{
                        left:[
                             -40,
                             -50,
                             -40
                        ],
                    }}
                    transition={{
                        duration:1,
                        repeat:Infinity,
                        ease:"linear",
                    }}
                    
                    >
                       <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" style={{"--fa-primary-color": "#2c3e50", "--fa-secondary-color": "#ecf0f1",}}/>
                    </motion.div>
                    <LinkButton style="" link="/about">About Me</LinkButton>
                    <LinkButton style="ghost" link="/projects">Projects</LinkButton>
                </div>
                <p className="text-big absolute right-40 -bottom-15 font-bold opacity-10">yuno</p>
            </div>
            <Footer></Footer>   
        </Container>
        
        </>
    )
}