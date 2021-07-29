const initState = {
    result: []
} 
  
const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return {...state, result: action.payload};
    
    default:
      return state;
  }
};
  
export default resultReducer;