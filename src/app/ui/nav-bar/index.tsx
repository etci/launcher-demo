import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Route } from "../../routes";

interface Props {
  routes: Omit<Route, "element">[];
}

const NavBar: React.FC<Props> = ({ routes }) => {
  const location = useLocation();
  const defaultRoute = routes.find(({ index }) => index);
  const routesWithoutIndex = routes
    .filter(({ index }) => !index)
    .map(({ name, path }) => (
      <Nav.Link as={NavLink} key={path} to={path}>
        {name}
      </Nav.Link>
    ));
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
        {defaultRoute && (
          <Navbar.Brand data-testid="navbar-brand mr-auto">
            <Link className="text-decoration-none text-white" to={defaultRoute.path}>
              {defaultRoute.name}
            </Link>
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={location.pathname}>
            {routesWithoutIndex}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
