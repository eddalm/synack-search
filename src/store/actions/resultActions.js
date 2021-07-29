import serpApi from "../../apis/serpApi"

// console.log(serpApi)
export const fetchResults = (searchCriteria) => async dispatch => {
    
    console.log('searchCriteria', searchCriteria);
    const params = {
        engine: searchCriteria.searchEngine,
        q: searchCriteria.searchText,
        key: "B92D57AEE45141AD96BC55721FC7F797"
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