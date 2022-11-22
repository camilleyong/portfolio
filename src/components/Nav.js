import './css/portfoliocontainer.css';
import './css/nav.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function SideBar() {
    const navigate = useNavigate();
    return (
    <SideNav
        onSelect={selected=> {
            console.log(selected);
            navigate('/' + selected);
            }}
        className="sidenav"
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="#home">
                <NavIcon>
                    <i class='fa fa-fw fa-home'></i>
                    </NavIcon>
                <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="#about">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-user"></i>
                    </NavIcon>
                <NavText>About</NavText>
                </NavItem>
                <NavItem eventKey="#portfolio">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-clipboard"></i>
                    </NavIcon>
                <NavText>Portfolio</NavText>
                </NavItem>
                <NavItem eventKey="#skills">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
                    </NavIcon>
                <NavText>Skills</NavText>
                </NavItem>
                <NavItem eventKey="#resume">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-file"></i>
                    </NavIcon>
                <NavText>Resume</NavText>
                </NavItem>
                <NavItem eventKey="#contact">
                <NavIcon>
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    </NavIcon>
                <NavText>Contact</NavText>
                </NavItem>
        </SideNav.Nav>
    </SideNav>
    );
}