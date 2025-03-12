import Container from "../components/Container";
import { motion } from "motion/react";
import { Link } from "react-router";
import LinkButton from "../components/LinkButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import Title from "../components/Title";
import Techs from "../components/Techs";
import Footer from "../components/Footer";

export default function about(){
    return(
        <>
        <Nav></Nav>
        <SideNav/>
        <Container >
        {
        //-----About me section
        }
            <div className="flex justify-center h-screen flex-col gap-5 mt-10">
                <Title>About Me</Title>
                <div className="flex gap-5 sm:gap-15 flex-col sm:flex-row">
                    <div className="sm:w-1/2">
                        <p>Hi. I’m Kim Terrence, looking for an opportunity to start a career and enhance my skills in front-end web development.</p>
                    </div>
                    <div className="sm:w-1/2 flex flex-col gap-5">
                        <div>
                            <p className="font-bold">Bachelor of Science in Information Technology</p>
                            <p className="text-sm">Cagayan State University | 2022-2026</p>
                        </div>
                        <div>
                            <p className="font-bold">4th Place Static Web Design</p>
                            <p className="text-sm">CSU Uniwide ICT | 2025</p>
                        </div>
                        <div>
                            <p className="font-bold">2nd Place Static Web Design</p>
                            <p className="text-sm">CSU-G Technolympics | 2024</p>
                        </div>
                        <div>
                            <p className="font-bold">3rd Place Quiz Bowl</p>
                            <p className="text-sm">CSU-G CICS Day | 2023</p>
                        </div>
                    </div>

                </div>

                <div className="w-full hidden sm:flex justify-center items-center">
                        <a href="#skills" className="absolute bottom-20"><FontAwesomeIcon icon={faComputerMouse} size="2xl" style={{color: "#ecf0f1",}} /></a>
                        <motion.div className="absolute"
                        
                        animate={{
                            bottom:[
                                 45,
                                 30,
                                 45
                            ],
                        }}
                        transition={{
                            duration:1,
                            repeat:Infinity,
                            ease:"linear",
                        }}

                        ><FontAwesomeIcon icon={faAnglesDown} size="2xl" style={{color: "#ecf0f1",}} /></motion.div>
                    </div>
            </div>

            {
            //-----Skills section
            }
            <div className="sm:h-screen flex justify-center flex-col gap-5" id="skills">
                <Title>Skills</Title>
                <p className="text-lg">Technologies and tools that I use in building websites.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
                    <Techs img={"/assets/svg/HTML5.svg"} name="HTML"/>
                    <Techs img={"/assets/svg/CSS3.svg"} name="CSS"/>
                    <Techs img={"/assets/svg/JavaScript.svg"} name="JavaScrit"/>
                    <Techs img={"/assets/svg/Tailwind CSS.svg"} name="Tailwind"/>
                    <Techs img={"/assets/svg/Bootstrap.svg"} name="Bootsrap"/>
                    <Techs img={"/assets/svg/React.svg"} name="React"/>
                    <Techs img={"/assets/svg/Vite.js.svg"} name="Vite"/>
                    <Techs img={"/assets/svg/PHP.svg"} name="PHP"/>
                </div>
                <p className="text-lg">Others</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6">
                    <Techs img={"/assets/svg/Java.svg"} name="Java"/>
                    <Techs img={"/assets/svg/CSharp.svg"} name="C#"/>
                    <Techs img={"/assets/svg/Arduino.svg"} name="Arduino"/>
                    <Techs img={"/assets/svg/MySQL.svg"} name="My SQL"/>
                </div>
            </div>
        </Container>
        <Footer></Footer>
        </>
    )
}