import * as React from "react";

import { render, fireEvent } from "@testing-library/react";
import ExistingQuestions from "./existingQuestions";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router-dom";

describe("dom test 1", () => {
  it("check the toggle button", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <ExistingQuestions />
        </Provider>
      </MemoryRouter>
    );

    var toggleButton = component.getByTestId("toggleButton");
    fireEvent.click(toggleButton);

    expect(component.queryByTestId("newQuestion")).not.toBeInTheDocument();
  });
});
 