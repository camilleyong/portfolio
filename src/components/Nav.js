import './css/portfoliocontainer.css';
import './css/nav.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function SideBar() {
    return (
    <SideNav
        onSelect={(selected) => {
            console.log(selected);
            }}
        className="sidenav"
        >
        <Toggle />
        <Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i class='fa fa-fw fa-home'></i>
                    </NavIcon>
                <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="about">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-user"></i>
                    </NavIcon>
                <NavText>About</NavText>
                </NavItem>
                <NavItem eventKey="portfolio">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-clipboard"></i>
                    </NavIcon>
                <NavText>Portfolio</NavText>
                </NavItem>
                <NavItem eventKey="skills">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
                    </NavIcon>
                <NavText>Skills</NavText>
                </NavItem>
                <NavItem eventKey="resume">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-file"></i>
                    </NavIcon>
                <NavText>Resume</NavText>
                </NavItem>
                <NavItem eventKey="contact">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    </NavIcon>
                <NavText>Contact</NavText>
                </NavItem>
        </Nav>
    </SideNav>
    );
}