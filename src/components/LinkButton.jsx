import { Link } from "react-router"

export default function LinkButton({children, link = "", style = ""}){

    if(style == "ghost"){
        var ghost = "bg-slateBlue border-lightGray border-1 inset-shadow-sm inset-shadow-white hover:bg-lightGray border-1 border-lightGray hover:border-lightGray hover:text-slateBlue hover:text-lg ease-in-out duration-700";
    }else{
        ghost = "text-slateBlue bg-lightGray hover:bg-slateBlue border-1 border-lightGray hover:border-lightGray hover:text-lightGray hover:text-lg ease-in-out duration-700";
    }


    return(
            <Link to={link} className={"px-9 py-3 rounded-full text-bold " + ghost}>{children}</Link>
    )
}