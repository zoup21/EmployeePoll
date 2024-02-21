import { render } from "@testing-library/react"
import CreateQuestion from "./createQuestion"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";



describe('Create question', () => {
    it('labels of creating poll are present', () => {
        var component = render(
            <MemoryRouter>
              <Provider store={store}>
                <CreateQuestion />
              </Provider>
            </MemoryRouter>
        );
        var firstOption = component.getByTestId('firstOption')
        var secondOption = component.getByTestId('secondOption')
        expect(firstOption).toBeInTheDocument();
        expect(secondOption).toBeInTheDocument();
    })
})



describe('Create question', () => {
    it('submit button of creating poll is present', () => {
        var component = render(
            <MemoryRouter>
              <Provider store={store}>
                <CreateQuestion />
              </Provider>
            </MemoryRouter>
        );
        var buttonSubmit = component.getByTestId('button-submit')
        expect(buttonSubmit).toBeInTheDocument();
        
    })
})

