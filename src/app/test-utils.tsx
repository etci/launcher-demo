import { Store } from "@reduxjs/toolkit";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store as appStore } from "./store";

interface RenderWithReduxParams {
  ui: React.ReactElement;
  options: RenderOptions & { store?: Store };
}

function renderWithRedux({
  ui,
  options: { store = appStore, ...rest } = {},
}: RenderWithReduxParams): ReturnType<typeof rtlRender> {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...rest });
}

export { renderWithRedux };
