import React from "react";
import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

it("renders the heading", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello/);
  expect(myElement).toBeInTheDocument();
});
