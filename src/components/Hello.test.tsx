import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test(`"Hello world should be in the document`, () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello world/i);
  expect(myElement).toBeInTheDocument();
});
