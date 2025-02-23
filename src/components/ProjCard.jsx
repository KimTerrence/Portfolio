import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjCard({link, img, name, tech, git}){
    return(
        <a href={link} className="rounded-md overflow-hidden z-0">
                <div className="relative w-full h-48 overflow-hidden">   
                    <img src={img} alt="" className=" sm:object-cover w-full"/>
                </div>
                <div className="py-4 bg-lightGray/5 flex flex-col justify-center">
                    <p className="md:text-sm lg:text-lg text-center font-bold">{name}</p>
                    <div className="flex justify-center items-center gap-3">
                        <a href={git} target="blank" className="hover:shadow-sm shadow-secondary rounded-full"><FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#c0bfbc",}} /></a>
                        <p className="text-sm text-center text-lightGray/70">  {tech}</p>
                    </div>
            </div>
        </a>
    )
}