import { fetchResults } from "../../../store/actions/resultActions";
import results from "../../fixtures/results";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
jest.mock('../../../apis/serpApi');
const middleware = [thunk]
const mockStore = configureStore(middleware);

test('should return google results', (done) => {

    const store = mockStore({result: []})
    const expectedAction = {
        type: "FETCH_RESULTS",
        payload: results
    }

    store.dispatch(fetchResults({searchEngine: 'google', searchText: 'apple'}));

    store.subscribe(() => {
        expect(store.getActions()).toEqual([expectedAction]);
        done();
  });
})


test('should return bing results', (done) => {

    const store = mockStore({result: []})
    const expectedAction = {
        type: "FETCH_RESULTS",
        payload: results
    }

    store.dispatch(fetchResults({searchEngine: 'bing', searchText: 'apple'}));

    store.subscribe(() => {
        expect(store.getActions()).toEqual([expectedAction]);
        done();
  });
})

test('should return both results', (done) => {

    const store = mockStore({result: []})
    const expectedAction = {
        type: "FETCH_RESULTS",
        payload: [...results, ...results]
    }

    store.dispatch(fetchResults({searchEngine: 'both', searchText: 'apple'}));

    store.subscribe(() => {
        expect(store.getActions()).toEqual([expectedAction]);
        done();
  });
})