import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react"
import store from "../store";
import Home from "./home";
import Login from "./login";






describe('Logout' , () => {
    it('logout from the poll app and go to login', async() => {
        var componentFirst = render(
            <MemoryRouter>
              <Provider store={store}>
                <Home />
              </Provider>
            </MemoryRouter>
        );
        var componentSecond = render(
            <MemoryRouter>
              <Provider store={store}>
                <Login />
              </Provider>
            </MemoryRouter>
        );
        var logOutButton = componentFirst.getByTestId('logout')
        fireEvent.click(logOutButton)
        var logOutNotPresent = componentFirst.queryByTestId('logout');
        expect(logOutNotPresent).toBeInTheDocument(); 
    })
})