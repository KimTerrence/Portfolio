import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"


export default function SideNav(){
    return(
        <div className="fixed -bottom-10 rounded-sm z-0 flex w-full gap-15 py-10 px-20 justify-between flex-row">
           <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col text-lightGray gap-5">
                    <a href="https://github.com/KimTerrence" target="blank" className="hover:shadow-sm shadow-secondary rounded-full"><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#c0bfbc",}} /></a>
                    <a href="" className="hover:shadow-sm shadow-secondary rounded-full"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#c0bfbc",}} /></a>
                    <a href="" className="hover:shadow-sm shadow-secondary"><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#c0bfbc",}}/></a>
                </div>
                <div className="h-50 w-0.5 bg-lightGray"></div>
           </div>
           <div className="flex flex-col justify-center items-center gap-30 absolute right-0 bottom-0">
                <a className="rotate-90  text-lightGray text-sm" href="mailto:quineskimterrence@gmail.com">quineskimterrence@gmail.com</a>
                <div className="h-30 w-0.5 bg-lightGray"></div>
           </div>
        </div>
    )
}