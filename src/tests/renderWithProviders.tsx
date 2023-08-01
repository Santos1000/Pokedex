import { ReactElement } from "react";
import { render } from "@testing-library/react";

const customRender = (ui: ReactElement) => render(ui);

export * from "@testing-library/react";
export { customRender as render };
