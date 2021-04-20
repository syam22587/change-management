import React from "react";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router";
import { render } from "@testing-library/react";
import Routes from "../../common/routes";

describe(" Header Navbar ", () => {
  test("link matches snapshot", () => {
    const component = renderer.create(
      <StaticRouter location="/">
        <Link to="/" />
      </StaticRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should contain the text ", () => {
    const component = render(<Routes />);
    const ele = component.getByTestId("title-id");
    expect(ele.textContent).toBe("Unity Stuff");
  });

  test("should contain the users link ", () => {
    const component = render(<Routes />);
    const ele = component.getByTestId("users-link-id");
    expect(ele.textContent).toBe("Users");
  });

  test("should contain the users link ", () => {
    const component = render(<Routes />);
    const ele = component.getByTestId("projects-link-id");
    expect(ele.textContent).toBe("Projects");
  });
});
