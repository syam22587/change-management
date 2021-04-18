import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import UsersComponent from "../components/users";

afterEach(() => {
  cleanup();
});
describe("Users Test Suite", () => {
  test("it should load three records by default ", () => {
    render(<UsersComponent />);
    const userComponent = screen.getByTestId("user-table-body");
    expect(userComponent).toBeInTheDocument();
  });
});
