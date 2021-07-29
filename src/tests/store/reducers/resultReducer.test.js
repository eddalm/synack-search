import resultReducer from "../../../store/reducers/resultReducer";
import results from "../../fixtures/results";

test('should set default state', () => {
    const state = resultReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({result: []})
})

test('should fetch search results replacing previous state', () => {
    const newResults = results.slice();
    newResults.push({
        block_position: 4,
        position: 2,
        title: 'example title 2',
        link: 'www.example-link2.com',
        domain: 'en.wikipedia2.org',
        displayed_link: 'www.example-link2.com',
        snippet: 'Platae2',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:dyi4wvGyyVAJ:https://ricette.giallozafferano.it/Impasto-per-pizza.html+&cd=9&hl=it&ct=clnk&gl=it',
        prerender: false,
        thumbnail: true,
        snippet_matched: ['pizza']
    })
    const action = {
        type: 'FETCH_RESULTS',
        payload: newResults
    }
    const state = resultReducer(null, action);

    expect(state.result).toEqual(newResults);
})