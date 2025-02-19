import { Link } from "react-router"

export default function Nav(){
    return(
    
        <div className="sticky w-full top-0 left-0 right-0 bg-primary text-lightGray z-40">
            <div className="relative h-20 flex justify-between items-center 2xl:px-30 text-lg w-full max-w-[1920px]">
                <div>

                </div>
                <div className="flex gap-5">
                    <Link to={'/'}>Home</Link>
                    <Link to={'about'}>About</Link>
                    <Link to={'project'}>Projects</Link>
                    <Link to={'contact'}>Contact</Link>
                </div>
            </div>
            
        </div>
    )
}