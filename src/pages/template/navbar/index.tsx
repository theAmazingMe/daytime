import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NithModeSwitch } from "../nightModeSwitch";
import { AppContext } from "../../../App";
import { AppContextType } from "../../../resources/types";

export const NavBar = () => {
	const { theme } = useContext(AppContext) as AppContextType;

	return (
		<div>
			<Navbar bg={theme} data-bs-theme="dark">
				<Container fluid>
					<Navbar.Brand href="/home">My App</Navbar.Brand>
					<Nav className="me-auto my-2 my-lg-0">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="login">
							Login
						</Nav.Link>
					</Nav>
					<Nav className="with-spacer">
						<NavbarCollapse className="justify-content-end">
							<Navbar.Text>
								<FontAwesomeIcon
									icon={icon({ name: "user", style: "solid" })}
								/>
								&nbsp;{/*username*/}
							</Navbar.Text>
						</NavbarCollapse>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								{" "}
								<NithModeSwitch />
							</Navbar.Text>
						</Navbar.Collapse>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
