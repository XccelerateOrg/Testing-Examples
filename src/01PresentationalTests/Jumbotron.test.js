import { render, screen } from "@testing-library/react";
import Jumbotron from "../components/01Presentational/Jumbotron";

it("displays the logo", () => {
  render(<Jumbotron />);

  const logo = screen.getByRole("heading", {
    name: /logo/i,
  });

  expect(logo).toBeInTheDocument();
});

it("displays the nav links", () => {
  render(<Jumbotron />);
  // The getByRole method allows you to query the DOM
  expect(
    screen.getByRole("link", { name: /home/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /features/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /contact/i })
  ).toBeInTheDocument();
});

it("displays the heading", () => {
  render(<Jumbotron />);

  expect(
    screen.getByRole("heading", {
      name: /welcome to our site!/i,
    })
  ).toBeInTheDocument();
});

it("displays the get started button", () => {
  render(<Jumbotron />);

  expect(
    screen.getByRole("button", { name: /get started/i })
  ).toBeInTheDocument();
});
