import Container from "../components/Container";
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
                <div className="flex gap-5 flex-wrap">
                    <ProjCard link={''} img={'/assets/projects/ppf.png'} name={'Portolio Website'} git={'https://github.com/KimTerrence/Portfolio'} tech={'React | Tailwind'} />
                    <ProjCard link={''} img={'/assets/projects/SmartSwitch.png'} name={'Smart Switch IOT + Web'} git={'notfound'} tech={'Bootstrap | PHP | Arduino'} />
                    <ProjCard link={''} img={'/assets/projects/sps.png'} name={'Smart Parking System IOT + Web'} git={'notfound'} tech={'React | Tailwind | Express | Arduino'} />
                    <ProjCard link={''} img={'/assets/projects/csug.png'} name={'CSU-G Bamboo Sanctuary'} git={'notfound'} tech={'HTML | CSS | JavaScript'} />
                    
                </div> 
           </div>

        </Container>
        </>
    )
}