import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Nav from "../Nav";
import theme from "../../utils/theme";

describe("Nav testing", () => {
  it("Renders a home link links", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    );
    expect(getByText("Home")).toHaveAttribute("href", "/");
  });
});
