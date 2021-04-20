import { render } from "@testing-library/react";
import NotFound from "../../common/notFound";

test("should display not found page ", () => {
  const { getByTestId } = render(<NotFound />);
  const element = getByTestId("not-found-title");
  expect(element.textContent).toBe("Oops...Page not found. - 404");
});
