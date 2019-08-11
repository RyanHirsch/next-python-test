import React from "react";

import { render } from "@testing-library/react";

import Nav from "../nav";

describe("Nav testing", () => {
  it("Renders a home link links", () => {
    const { getByText } = render(<Nav />);
    expect(getByText("Home")).toHaveAttribute("href", "/");
  });
});
