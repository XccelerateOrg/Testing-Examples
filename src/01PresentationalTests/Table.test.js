import { render, screen } from "@testing-library/react";
import Table from "../components/01Presentational/Table";
const fakeEmployees = [
  {
    id: 1,
    name: "John Smith",
    department: "Sales",
    title: "Senior Sales Agent",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    department: "Engineering",
    title: "Senior Full-Stack Engineer",
  },
  {
    id: 3,
    name: "Tim Reynolds",
    department: "Design",
    title: "Designer",
  },
];

it("renders with expected values", () => {
  render(<Table employees={fakeEmployees} />);
  // the getByRole method allows you to query the DOM i
  expect(
    screen.getByRole("cell", { name: /john smith/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("cell", { name: /engineering/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("cell", { name: /designer/i })
  ).toBeInTheDocument();
});
