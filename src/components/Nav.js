import "./css/portfoliocontainer.css";
import "./css/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar className='navigation' key={expand} bg="" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle className='toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className='offcanvas'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="close">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">
                    <i class="fa-sharp fa-solid fa-user"></i>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#about">
                    <i class="fa-sharp fa-solid fa-user"></i>
                    About
                  </Nav.Link>
                  <Nav.Link href="#portfolio">
                    <i class="fa-sharp fa-solid fa-clipboard"></i>
                    Portfolio
                  </Nav.Link>
                  <Nav.Link href="#skills">
                    <i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
                    Skills
                  </Nav.Link>
                  <Nav.Link href="#resume">
                    <i class="fa-sharp fa-solid fa-file"></i>
                    Resume
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

// export default function SideBar() {
//     const navigate = useNavigate();
//     return (
//     <SideNav
//         onSelect={selected=> {
//             console.log(selected);
//             navigate('/' + selected);
//             }}
//         className="sidenav"
//         >
//         <SideNav.Toggle />
//         <SideNav.Nav defaultSelected="#home">
//             <NavItem eventKey="#home">
//                 <NavIcon>
//                     <i class='fa fa-fw fa-home'></i>
//                     </NavIcon>
//                 <NavText>Home</NavText>
//                 </NavItem>
//                 <NavItem eventKey="#about">
//                 <NavIcon>
//                     <i class="fa-sharp fa-solid fa-user"></i>
//                     </NavIcon>
//                 <NavText>About</NavText>
//                 </NavItem>
//                 <NavItem eventKey="#portfolio">
//                 <NavIcon>
//                     <i class="fa-sharp fa-solid fa-clipboard"></i>
//                     </NavIcon>
//                 <NavText>Portfolio</NavText>
//                 </NavItem>
//                 <NavItem eventKey="#skills">
//                 <NavIcon>
//                     <i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
//                     </NavIcon>
//                 <NavText>Skills</NavText>
//                 </NavItem>
//                 <NavItem eventKey="#resume">
//                 <NavIcon>
//                     <i class="fa-sharp fa-solid fa-file"></i>
//                     </NavIcon>
//                 <NavText>Resume</NavText>
//                 </NavItem>
//                 <NavItem eventKey="#contact">
//                 <NavIcon>
//                     <i class="fa-sharp fa-solid fa-envelope"></i>
//                     </NavIcon>
//                 <NavText>Contact</NavText>
//                 </NavItem>
//         </SideNav.Nav>
//     </SideNav>
//     );
// }
