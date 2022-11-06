import { fireEvent, screen } from "@testing-library/react";
import NavBar from ".";
import { Route } from "../../routes";
import { renderWithRouter } from "../../utils/test-utils";

const routes: Route[] = [
  {
    index: true,
    name: "main route",
    element: <div>Main route</div>,
    path: "/",
  },
  {
    name: "route 1",
    element: <div>Route 1</div>,
    path: "/route1",
  },
  {
    name: "route 2",
    element: <div>Route 2</div>,
    path: "/route2",
  },
];
describe("NavBar component", () => {
  it("renders all routes", async () => {
    renderWithRouter(<NavBar routes={routes} />);
    routes.forEach((route) => {
      expect(screen.getByText(route.name)).toBeInTheDocument();
    });
    expect(screen.getByTestId("navbar-brand")).toContainElement(screen.getByText(routes[0].name));
    expect(screen.getByTestId("navbar-brand")).not.toContainElement(
      screen.getByText(routes[1].name),
    );
    expect(screen.getByTestId("navbar-brand")).not.toContainElement(
      screen.getByText(routes[2].name),
    );
    expect(location.pathname).toBe(routes[0].path);
  });
  it("navigates between routes", async () => {
    renderWithRouter(<NavBar routes={routes} />);

    fireEvent.click(screen.getByText(routes[1].name));
    expect(screen.getByText(routes[1].name)).toHaveClass("active");
    expect(location.pathname).toBe(routes[1].path);
    expect(screen.getByText(routes[2].name)).not.toHaveClass("active");

    fireEvent.click(screen.getByText(routes[2].name));
    expect(screen.getByText(routes[2].name)).toHaveClass("active");
    expect(location.pathname).toBe(routes[2].path);
    expect(screen.getByText(routes[1].name)).not.toHaveClass("active");

    fireEvent.click(screen.getByText(routes[0].name));
    expect(screen.getByText(routes[0].name)).not.toHaveClass("active");
    expect(location.pathname).toBe(routes[0].path);
    expect(screen.getByText(routes[1].name)).not.toHaveClass("active");
    expect(screen.getByText(routes[2].name)).not.toHaveClass("active");
  });
});
