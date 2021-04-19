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
    // code comes here
    const component = render(<UsersComponent />);
    const el = component.getByTestId("table-header");
    expect(el.textContent).toMatch(/Poject ID/);
  });

  test("should load the custom table body component ", () => {
    // code comes here
    // code comes here
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
    const element1 = component.getByTestId(testKey1);
    expect(element1).toHaveTextContent("2022-06-03");
    const element2 = component.getByTestId(testKey2);
    expect(element2).toHaveTextContent("2018-06-08");
    const element3 = component.getByTestId(testKey3);
    expect(element3).toHaveTextContent("2018-06-05");
  });

  test("should display the load more button ", () => {
    // code comes here
    const component = render(<UsersComponent />);
    let btnElement = component.getByTestId("load-more-btn");
    expect(btnElement.textContent).toBe("Load More");
  });

  test("should sort the data based on date column ", async () => {
    // code comes here
    const { getByTestId, container } = render(<UsersComponent />);
    // let btnElement = getByTestId("load-more-btn");

    // fireEvent.click(screen.getByRole("button"));
    // const component = render(<UsersComponent />);

    // let key = "53ZPA42pd5ZfJpCAa2";
    // expect(getByTestId("53ZPA42pd5ZfJpCA23a")).toHaveTextContent("Jquery");
    expect(container.querySelectorAll(".row-id").length).toBe(3);
  });

  test("should load 3 more records when clicked on load more button ", async () => {
    // const mockOnClick = jest.fn();
    jest.useFakeTimers();

    // const { getByTestId, container } = await act(
    //   async () => await render(<UsersComponent />)
    // );

    const { getByTestId, container } = render(<UsersComponent />);

    let btnElement = await getByTestId("load-more-btn");

    // await waitFor(() => {
    act(() => fireEvent.click(btnElement));
    //  });

    jest.advanceTimersByTime(3000);

    // // setTimeout(() => {}, 3000);
    // expect(setTimeout).toHaveBeenLastCalledWith(
    //   expect(container.querySelectorAll(".row-id").length).toBe(6),
    //   1500
    // );
    // waitFor();
    expect(container.querySelectorAll(".row-id").length).toBe(6);
    // await act(() => promise);
    // done();
    // done(error);
  });
  /*

  test("should load the data and sorting order should be preserved when click on load more button ", () => {
    // code comes here
    const component = render(<UsersComponent />);
  });

  test("should thrown an error when load more is clicked every second time  ", () => {
    // code comes here
    const component = render(<UsersComponent />);
  }); */
});
