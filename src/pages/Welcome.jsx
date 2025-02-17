import Container from "../components/Container"
import { Link } from "react-router"
import LinkButton from "../components/LinkButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "motion/react"



export default function Welcome(){



    return(
        <Container>
            <div className="flex items-center justify-center h-screen flex-col p-0 m-0 gap-10 ">
                <div className="flex items-center justify-center flex-col p-0 m-0">
                    <p className="text-9xl sm:text-big/35 font-bebas font-normal p-0 sm:m-0 m-6 flex">KIM TERRENCE</p>
                    <i className="text-xl">{'< '}Full Stack Web Developer{' />'}</i>
                </div>
                <div className="flex gap-5 h-22 items-center relative">
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
            </div>
            
        </Container>
    )
}