import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("default counter should be 0", () => {
  render(<Counter description="My Counter" defaultCount={0} />);
  const myElement = screen.getByText(/My Counter : 0/i);
  const mySpanElement = screen.getByText(/Counter is 0/i);
  expect(myElement).toBeInTheDocument();
  expect(mySpanElement).toBeInTheDocument();
});

test("counter should be increment by 1 after click the + button", () => {
  render(<Counter description="My Counter" defaultCount={0} />);
  const myButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(myButton);
  const myElement = screen.getByText(/Counter is 1/i);
  expect(myElement).toBeInTheDocument();
});

test("counter should be decrement by 1 after click the - button", () => {
  render(<Counter defaultCount={0} description="My counter is 0" />);
  const myButton = screen.getByRole("button", { name: "-" });
  fireEvent.click(myButton);
  const myElement = screen.getByText(/Counter is -1/i);
  expect(myElement).toBeInTheDocument();
});
