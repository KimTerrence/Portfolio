import Container from "../components/Container";
import { Link } from "react-router";



export default function NotFound(){
    return(
        <Container>
            <Link to={'/'} className="flex h-screen w-full items-center justify-center flex-col">

                <p className=" text-big/5 text-primary text-stroke font-bebas">Page Not Found</p>
                <p className="text-10xl font-bebas">Error 404</p>
                <p className=" text-big/5 text-primary text-stroke font-bebas">Page No Found</p>
            </Link>
        </Container>
    )
}