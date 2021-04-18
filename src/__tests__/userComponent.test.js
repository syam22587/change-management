import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import UsersComponent from "../components/users";

afterEach(() => {
  cleanup();
});
describe("Users Test Suite", () => {
  test("it should load the parent division", () => {
    render(<UsersComponent />);
    const userComponent = screen.getByTestId("user-component-1");
    expect(userComponent).toBeInTheDocument();
    // expect(toDoElement).toHaveTextContent("Change Management Report");
  });
});
