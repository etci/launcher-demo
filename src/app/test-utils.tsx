import { Store } from "@reduxjs/toolkit";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store as appStore } from "./store";

type Options = RenderOptions & { store?: Store };
function renderWithRedux(
  ui: React.ReactElement,
  { store = appStore, ...rest }: Options = {},
): ReturnType<typeof rtlRender> {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...rest });
}

export { renderWithRedux };
