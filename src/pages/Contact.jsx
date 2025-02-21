import Container from "../components/Container";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import Title from "../components/Title";


export default function Contact(){
    return(
        <>
        <Nav></Nav>
        <SideNav></SideNav>
        <Container>
            <div className="w-full h-full flex items-center justify-center flex-col -mt-20">
                <Title>Let's Connect!</Title>
                <div className="w-150 text-center text-lightGray/70">
                    <p>I’m eager to find an opportunity as a Web Developer br where I can apply my skills, work on real-world projects, and expand my knowledge of new technologies. If you're looking for a dedicated and motivated developer, don’t hesitate to reach out—I'd love to connect!</p>

                </div>
            </div>
        </Container>
        </>
    )
}