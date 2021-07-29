import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from '../App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store/reducers/rootReducer';
import thunk from 'redux-thunk';
const middlewares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

test('renders search form', async () => {
  render(<Provider store={store}><App /></Provider>);
  const searchButton = screen.getByText("search");
  expect(searchButton).toBeInTheDocument();
});
