import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/01Presentational/Jumbotron";
import Table from "./components/01Presentational/Table";
import Travel from "./components/01Presentational/Travel";
import FetchData from "./components/02Interactive/FetchData";
import Form from "./components/02Interactive/Form";
import Vote from "./components/03Redux/Vote";
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
function App() {
  return (
    <div className="App font4">
      <h1>testing cheatsheet</h1>
      <h2>Jumbotron</h2>
      <p>
        {" "}
        - Tests for the heading to exist -{" "}
        <code>getByRole</code>
        <br />- Tests for the nav links to display
        <br />- Tests for heading to be displayed
        <br />- Tests that the button exists
      </p>

      <Jumbotron />
      <center>
        <hr />
        <div className="container">
          <h2>Table</h2>
          <p>
            - Tests for cell to contain the employee names
            (for props to be passed into the component){" "}
          </p>
          <Table employees={fakeEmployees} />
        </div>
        <hr />
        <div className="container">
          <h2>Travel</h2>
          <p>- Tests for travel snapshot </p>
          <Travel />
        </div>
        <hr />
        <div className="container">
          <h2>Cocktail API</h2>
          <p>
            - Tests for the component to render the dropbox
            <br />- Tests if there is nothing in the
            component
          </p>
          <FetchData />
        </div>
        <hr />
        <div className="container">
          <h2>Form</h2>
          <p>
            - Tests for email address and password input to
            exist <br /> - Tests for handle register to be
            invoked
          </p>
          <Form />
        </div>
        <hr />
        <div className="container">
          <h2>Vote</h2>
          <p>Tests for </p>
          {/* <Vote /> */}
        </div>
      </center>
    </div>
  );
}

export default App;
