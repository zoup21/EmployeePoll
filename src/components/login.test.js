import { render } from "@testing-library/react";
import Login from "./login";
import { Provider } from "react-redux";
import store from "../store";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
    it("will match snapshot", () => {
        var component = render(
            <MemoryRouter>
              <Provider store={store}>
                <Login />
              </Provider>
            </MemoryRouter>
          );
          expect(component).toMatchSnapshot();
    })
});


describe('Login fields', () => {
  it('labels of login page are present' , () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
      var nameField = component.getByTestId("name")
      var passwordField = component.getByTestId("password")
      expect(nameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
  })
})




