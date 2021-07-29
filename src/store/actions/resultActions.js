import serpApi from "../../apis/serpApi"

// console.log(serpApi)
export const fetchResults = (searchCriteria) => async dispatch => {
    
    console.log('searchCriteria', searchCriteria);
    const params = {
        engine: searchCriteria.searchEngine,
        q: searchCriteria.searchText,
        key: "F3057E93EC7A45C585777015680A0939"
    };
    
    let response;
    if (searchCriteria.searchEngine === 'both') {
        let google = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=google`);
        let bing = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=bing`);
        console.log('google results', google.data.organic_results)
        console.log('bing results', bing.data.organic_results)
        response = [...google.data.organic_results, ...bing.data.organic_results];
        console.log('combined results', response)
    } else {
        let data = await serpApi.get(`search?api_key=${params.key}&q=${params.q}&engine=${params.engine}`)
        response = data.data.organic_results;
        console.log(response)
    }

    dispatch({
        type: 'FETCH_RESULTS',
        payload: response
    });
}