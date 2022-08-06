import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";
describe("counter", () => {
  describe("initialize defaultCounter=0 and description=My counter", () => {
    beforeEach(() => {
      render(<Counter description="My Counter" defaultCount={0} />);
    });

    test("render description", () => {
      const myElement = screen.getByText(/My Counter : 0/i);
      expect(myElement).toBeInTheDocument();
    });

    test("default counter should be 0", () => {
      const mySpanElement = screen.getByText(/Counter is 0/i);
      expect(mySpanElement).toBeInTheDocument();
    });

    describe("when button + clicked", () => {
      beforeEach(() => {
        const myButton = screen.getByRole("button", { name: "increment" });
        fireEvent.click(myButton);
      });
      test("counter should be increment by 1 after click the + button", () => {
        const myElement = screen.getByText(/Counter is 1/i);
        expect(myElement).toBeInTheDocument();
      });
    });

    describe("when button - clicked", () => {
      beforeEach(() => {
        const myButton = screen.getByRole("button", { name: "decrement" });
        fireEvent.click(myButton);
      });
      test("counter should be decrement by 1 after click the - button", () => {
        const myElement = screen.getByText(/Counter is -1/i);
        expect(myElement).toBeInTheDocument();
      });
    });
  });
  describe("initialize defaultCounter=5 and description=WWW", () => {
    beforeEach(() => {
      render(<Counter defaultCount={5} description="WWW" />);
    });
    test("default value at the beginning", () => {
      const myElement = screen.getByText(/WWW : 5/i);
      expect(myElement).toBeInTheDocument();
      const mySpanElement = screen.getByText(/Counter is 5/i);
      expect(mySpanElement).toBeInTheDocument();
    });

    describe("increment or decrement by 10", () => {
      test("increment by input value after clicked + button", async () => {
        const myButton = screen.getByRole("button", { name: "increment" });
        const myInput = screen.getByLabelText(/Input Number:/i);
        fireEvent.change(myInput, { target: { value: "10" } });
        await user.click(myButton);
        const myElement = screen.getByText(/Counter is 15/i);
        //   screen.debug(); for debugging
        expect(myElement).toBeInTheDocument();
      });
      test("decrement by input value after clicked - button", () => {
        const myButton = screen.getByRole("button", { name: "decrement" });
        const myInput = screen.getByLabelText(/Input Number:/i);
        fireEvent.change(myInput, { target: { value: "10" } });
        fireEvent.click(myButton);
        const myElement = screen.getByText(/Counter is -5/i);
        //   screen.debug();
        expect(myElement).toBeInTheDocument();
      });
    });
  });
});
