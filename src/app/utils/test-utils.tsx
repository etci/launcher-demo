import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(
  ui: React.ReactElement,
  options: RenderOptions = {},
): ReturnType<typeof rtlRender> {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}
export { renderWithRouter };
