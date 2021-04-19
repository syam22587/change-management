import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import UsersComponent from "../components/users";

afterEach(() => {
  cleanup();
});
describe("Users Test Suite", () => {
  test("it should load three records by default ", () => {
    const userComp = render(<UsersComponent />);
    const userComponent = screen.getByTestId("user-table-body");
    // console.log("userComponent", userComponent);
    expect(userComponent).toBeInTheDocument();

   
  });
});
