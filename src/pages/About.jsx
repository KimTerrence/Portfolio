import Container from "../components/Container";
import { motion } from "motion/react";
import { Link } from "react-router";


export default function about(){
    return(
        <Container >
                <div className="flex h-screen w-full items-center justify-center flex-col">
                    <Link className="absolute top-10 left-10" to="/">Go Back</Link>
                    <p className="font-bebas text-8xl text-slateBlue text-stroke sm:text-big/20 absolute left-0 sm:left-75 top-70 sm:top-60">About Me</p>
                    <p className="font-bebas text-8xl/25 sm:text-big/55 z-10 bg-slateBlue w-full text-center sm:h-50">About Me  </p>
                    <p className="font-bebas text-8xl text-slateBlue text-stroke sm:text-big/20 absolute right-0 sm:right-75 bottom-70 sm:bottom-60 ">About Me</p>
                </div>
                <div className="h-screen">

                </div>
        </Container>
    )
}