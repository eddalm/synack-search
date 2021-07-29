import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from '../../../App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../store/reducers/rootReducer';
import thunk from 'redux-thunk';

jest.mock("../../../apis/serpApi");
const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

test('perform a search', async () => {
    render(
        <Provider store={store}><App /></Provider>
    );

    const inputElement = screen.getByPlaceholderText("Search something...");
    const buttonElement = screen.getByRole("button", {name: /search/i});
    fireEvent.change(inputElement, {target: { value: "pineapple" }});
    fireEvent.click(buttonElement);
    const resultsElement = await screen.findAllByTestId("result-list-item");

    expect(resultsElement.length).toBe(1);
})