import { Link } from "react-router"

export default function Nav(){


    return(
    
        <div className="sticky w-full top-0 left-0 right-0 bg-primary text-lightGray z-40">
            <div className="relative h-20 flex justify-between items-center 2xl:px-30 text-lg w-full max-w-[1600px]">
                <div>
                    <p className="font-bold text-lg/3 bg-primary z-10"><span>K</span><span>c</span><span>r</span><span>e</span><span>a</span><span>t</span><span>e</span>s<span></span></p>
                </div>
                <div className="flex gap-8 text-lg">
                    <Link className="hover:text-secondary duration-700 ease-in-out decoration-2 underline-offset-7 hover:underline" to={'/'}>Home</Link>
                    <Link className="hover:text-secondary duration-700 ease-in-out decoration-2 underline-offset-7 hover:underline" to={'/about'}>About</Link>
                    <Link className="hover:text-secondary duration-700 ease-in-out decoration-2 underline-offset-7 hover:underline" to={'/project'}>Projects</Link>
                    <Link className="hover:text-secondary duration-700 ease-in-out decoration-2 underline-offset-7 hover:underline" to={'/contact'}>Contact</Link>
                </div>
            </div>
            
        </div>
    )
}