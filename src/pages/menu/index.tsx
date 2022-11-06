import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../../app/routes";
import NavBar from "../../app/ui/nav-bar";
function Menu() {
  return (
    <BrowserRouter>
      <NavBar routes={routes} />
      <Routes>
        {routes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
