import React from "react";
import { render, screen } from "@testing-library/react-native";
import PxLogo from "./logo";

describe("<Button />", () => {
  it("render the png logo component", () => {
    render(<PxLogo  />);
    const imageElement = screen.getByTestId('Logo');
    expect(imageElement).toBeDefined();
  });

});
