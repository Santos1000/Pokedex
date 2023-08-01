import React from "react";
import PxButton from "./button";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("<Button />", () => {
  it("renders the simple Button component", () => {
    const label = "My Button";
    render(<PxButton title={label} />);
    const buttonEl = screen.getByText(label);

    expect(buttonEl).toBeOnTheScreen();
  });

  it("calls onClick function when clicked", async () => {
    const onClickMock = jest.fn();
    render(<PxButton title="My Button" onPress={onClickMock} />);

    await fireEvent.press(screen.getByText("My Button"));

    expect(onClickMock).toHaveBeenCalled();
  });
});
