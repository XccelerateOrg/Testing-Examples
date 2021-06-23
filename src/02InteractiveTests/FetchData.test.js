import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { rest } from "msw";
import FetchData from "../components/02Interactive/FetchData";
import { mockServer } from "./fetchDataSetup.js";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

test("renders mock drink data", async () => {
  render(<FetchData />);
  const searchInput = screen.getByRole("searchbox");

  user.type(searchInput, "vodka, {enter}");

  expect(
    await screen.findByRole("img", { name: /test drink/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /test drink/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/test ingredient/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/test instructions/i)
  ).toBeInTheDocument();
});

test("renders no drink results", async () => {
  mockServer.use(
    rest.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            drinks: null,
          })
        );
      }
    )
  );
  render(<FetchData />);
  const searchInput = screen.getByRole("searchbox");
  // type into the user input
  user.type(searchInput, "vodka, {enter}");

  // grab the heading
  expect(
    await screen.findByRole("heading", {
      name: /no drinks found/i,
    })
  ).toBeInTheDocument();
});

test("renders service unavailable", async () => {
  mockServer.use(
    rest.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php",
      (req, res, ctx) => {
        return res(ctx.status(503));
      }
    )
  );
  render(<FetchData />);
  const searchInput = screen.getByRole("searchbox");

  user.type(searchInput, "vodka, {enter}");

  expect(
    await screen.findByRole("heading", {
      name: /Service unavailable/i,
    })
  ).toBeInTheDocument();
});

//
test("prevents GET request when search input empty", async () => {
  render(<FetchData />);
  // grab the search input
  const searchInput = screen.getByRole("searchbox");

  // type in the enter key word
  user.type(searchInput, "{enter}");

  // expect then, the heading to not be in the document
  expect(
    screen.queryByRole("heading")
  ).not.toBeInTheDocument();
});
