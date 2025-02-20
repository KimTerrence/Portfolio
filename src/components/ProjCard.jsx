import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjCard({link, img, name, tech, git}){
    return(
        <a href={link} className="z-10 hover:text-secondary duration-700 ease-in-out">
            <div className="h-50 bg-lightGray/20 flex items-end rounded-t-sm">   
                <img src={img} alt="" className="w-90 rounded-t-sm"/>
            </div>
            <div className="w-90 bg-lightGray/5 h-30 rounded-b-sm flex flex-col justify-center gap-2">
                <p className="text-lg text-center font-bold">{name}</p>
                <div className="flex justify-center items-center gap-3">
                    <a href={git} target="blank" className="hover:shadow-sm shadow-secondary rounded-full"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#c0bfbc",}} /></a>
                    <p className="text-sm text-center text-lightGray/70">  {tech}</p>
                </div>
               
            </div>
        </a>
    )
}