import serpApi from "../../apis/serpApi"

export const fetchResults = (searchCriteria) => async dispatch => {
    
    const params = {
        engine: searchCriteria.searchEngine,
        q: searchCriteria.searchText,
        key: "F3057E93EC7A45C585777015680A0939"
    };
    
    let response;
    if (searchCriteria.searchEngine === 'both') {
        let google = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=google`);
        let bing = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=bing`);
        response = [...google.data.organic_results, ...bing.data.organic_results];
    } else {
        let data = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=${params.engine}`)
        response = data.data.organic_results;
    }

    dispatch({
        type: 'FETCH_RESULTS',
        payload: response
    });
}