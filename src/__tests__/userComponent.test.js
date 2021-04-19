import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";

import renderer from "react-test-renderer";
import UsersComponent from "../components/users";
import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  cleanup();
});
describe("Users Test Suite", () => {
  test(" should load the parent division", () => {
    const userComp = render(<UsersComponent />);
    const userComponent = screen.getByTestId("user-component-1");
    expect(userComponent).toBeInTheDocument();
  });

  test(" should contain the test ", () => {
    const userComp = render(<UsersComponent />);
    const titleEl = userComp.getByTestId("titleBar");
    expect(titleEl.textContent).toBe("User's Change Management Report");
  });

  test("should load the custom table header component ", () => {
    const component = render(<UsersComponent />);
    const el = component.getByTestId("table-header");
    expect(el.textContent).toMatch(/Poject ID/);
  });

  test("should load the custom table body component ", () => {
    const component = render(<UsersComponent />);
    const el = component.getByTestId("user-table-body");
    expect(el.textContent).toMatch(/Windows 98/);
  });

  test("should load 3 records by default ", () => {
    const { container } = render(<UsersComponent />);

    expect(container.querySelectorAll(".row-id").length).toBe(3);
  });

  test(" should load default data with 3 records ", () => {
    const component = render(<UsersComponent />);

    let testKey1 = "dThhsquugcNuScEjo111";
    let testKey2 = "Xcm2FRCQZZB2Fb37h1";
    let testKey3 = "Xcm2FRCQZZB2Fb373";
    const element1 = component.getByTestId(testKey1);
    expect(element1).toHaveTextContent("Windows 98");
    const element2 = component.getByTestId(testKey2);
    expect(element2).toHaveTextContent("XML Content");
    const element3 = component.getByTestId(testKey3);
    expect(element3).toHaveTextContent("Java Language");
  });

  test(" should show the default data in reverse chronological order", () => {
    const component = render(<UsersComponent />);

    let testKey1 = "dThhsquugcNuScEjo111";
    let testKey2 = "Xcm2FRCQZZB2Fb37h1";
    let testKey3 = "Xcm2FRCQZZB2Fb373";

    const { getByTestId, container } = render(<UsersComponent />);
    expect(container.querySelectorAll(".row-id")[0]).toHaveTextContent(
      testKey1
    );
    expect(container.querySelectorAll(".row-id")[1]).toHaveTextContent(
      testKey2
    );
    expect(container.querySelectorAll(".row-id")[2]).toHaveTextContent(
      testKey3
    );
  });

  test(" should sort in ascending order when clicked on date field header", async () => {
    const { getByTestId, container } = render(<UsersComponent />);

    let testKey1 = "dThhsquugcNuScEjo111";
    let testKey2 = "Xcm2FRCQZZB2Fb37h1";
    let testKey3 = "Xcm2FRCQZZB2Fb373";
    let btnElement = getByTestId("date-sort-test");
    fireEvent.click(btnElement);
    expect(container.querySelectorAll(".row-id")[0]).toHaveTextContent(
      testKey3
    );
    expect(container.querySelectorAll(".row-id")[1]).toHaveTextContent(
      testKey2
    );
    expect(container.querySelectorAll(".row-id")[2]).toHaveTextContent(
      testKey1
    );
  });

  test("should display the load more button ", () => {
    const component = render(<UsersComponent />);
    let btnElement = component.getByTestId("load-more-btn");
    expect(btnElement.textContent).toBe("Load More");
  });

  test("should sort the data based on date column ", async () => {
    const { getByTestId, container } = render(<UsersComponent />);

    expect(container.querySelectorAll(".row-id").length).toBe(3);
  });

  test("should load 3 more records when clicked on load more button ", async () => {
    jest.useFakeTimers();
    const { getByTestId, container } = render(<UsersComponent />);
    let btnElement = getByTestId("load-more-btn");
    fireEvent.click(btnElement);
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    await waitFor(() => {
      expect(container.querySelectorAll(".row-id").length).toBe(6);
    });
  });
});
