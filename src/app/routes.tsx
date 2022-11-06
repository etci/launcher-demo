import Launches from "../pages/menu/launch";

export interface Route {
  name: string;
  path: string;
  element: React.ReactElement;
  index?: boolean;
}

export const routes: Route[] = [
  {
    name: "Quin",
    element: <Launches />,
    path: "/",
    index: true,
  },
];
