import Container from "../components/Container";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjCard from "../components/ProjCard";
import SideNav from "../components/SideNav";
import Title from "../components/Title";


export default function Projects(){
    return(
        <>
        <Nav></Nav>
        <SideNav></SideNav>
        <Container>
           <div className="flex flex-col gap-5 pt-30">
                <Title>My Recent Projects</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-none mx-auto gap-14 md:gap-8 mb-28">
                    <ProjCard link={''} img={'/assets/projects/ppf.png'} name={'Portolio Website'} git={'https://github.com/KimTerrence/Portfolio'} tech={'React | Tailwind'} />
                    <ProjCard link={''} img={'/assets/projects/SmartSwitch.png'} name={'Smart Switch IOT + Web'} git={'notfound'} tech={'Bootstrap | PHP | Arduino'} />
                    <ProjCard link={''} img={'/assets/projects/sps.png'} name={'Smart Parking System IOT + Web'} git={'notfound'} tech={'React | Tailwind | Express | Arduino'} />
                    <ProjCard link={''} img={'/assets/projects/csug.png'} name={'CSU-G Bamboo Sanctuary'} git={'notfound'} tech={'HTML | CSS | JavaScript'} />
                    
                </div>  
           </div>

        </Container>
        <Footer/>
        </>
    )
}