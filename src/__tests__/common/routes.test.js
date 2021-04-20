import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import UsersComponent from "../../components/users";
import { MemoryRouter } from "react-router";
import Routes from "../../common/routes";

jest.mock("../../components/users");

afterEach(() => {
  cleanup();
});

describe("routes ", () => {
  test("Should render users component as home page on default route", () => {
    // Arrange
    UsersComponent.mockImplementation(() => <div>UsersComponent</div>);
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("UsersComponent")).toBeInTheDocument();
  });
});
