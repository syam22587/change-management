import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import ToDo from "../todo";

afterEach(() => {
  cleanup();
});

test("sometst", () => {
  render(<ToDo />);
  const toDoElement = screen.getByTestId("todo-1");
  expect(toDoElement).toBeInTheDocument();
  expect(toDoElement).toHaveTextContent("skv is the best");
});

test("test", () => {
  expect(true).toBe(true);
});

test("matches snapshot", () => {
  let tree = renderer.create(<ToDo />).toJSON();
  console.log("received componet ", tree);
  expect(tree).toMatchSnapshot();
});
