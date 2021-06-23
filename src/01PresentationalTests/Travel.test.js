import { render } from "@testing-library/react";
import Travel from "../components/01Presentational/Travel";
/**********************************************
 * Snapshot Testing
 * ==================================
 * Snapshot tests are provided by Jest and are great to use when you simply want to make sure the HTML output of a component does not change unexpectedly.
 ***********************************************/
it("displays the header and paragraph text", () => {
  const { container } = render(<Travel />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="card text-center m-1"
        style="width: 18rem;"
      >
        <i
          class="material-icons"
          style="font-size: 4rem;"
        >
          airplanemode_active
        </i>
        <h4>
          Travel Anywhere
        </h4>
        <p
          class="p-1"
        >
          Our premium package allows you to take exotic trips anywhere at the cheapest prices!
        </p>
      </div>
    </div>
  `);
});
