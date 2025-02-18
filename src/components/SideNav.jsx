import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

export default function SideNav(){
    return(
        <div className="fixed left-5 top-1/4 rounded-sm border-1 h-auto z-20 flex flex-col gap-15 py-10 px-5   ">
            <Link to={'/'} className="flex items-center justify-center"><FontAwesomeIcon size="lg" icon={faHouse} style={{color: "#ecf0f1",}} /></Link>
            <Link to={'/'} className="flex items-center justify-center"><FontAwesomeIcon size="lg" icon={faUser} style={{color: "#ecf0f1",}} /></Link>
            <Link to={'/'} className="flex items-center justify-center"><FontAwesomeIcon size="lg" icon={faFolder} style={{color: "#ecf0f1",}} /></Link>
            <Link to={'/'} className="flex items-center justify-center"></Link>
           
        </div>
    )
}