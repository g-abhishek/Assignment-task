import { SEARCH_QUERY, SORT_POPULARITY, SORT_TYPE } from './Types'

export const searchQuery = (searchText) => {
    console.log(searchText)
    return {
        type: SEARCH_QUERY,
        payload: searchText
    }
}