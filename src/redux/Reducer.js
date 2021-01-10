import { SEARCH_QUERY } from './Types'

const initialState = {
    dataRange: 'all',
    page: 0,
    prefix: true,
    searchText: '',
    sort: 'byPopularity',
    type: 'story'
}

const reducers = (state = initialState, action) => {
    console.log("Reducers", action.type, action.payload)
    switch(action.type){    
        case SEARCH_QUERY: return {
            ...state,
            searchText: action.payload
        }
        default: return state
    }
}

export default reducers