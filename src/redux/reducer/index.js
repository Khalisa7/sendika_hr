import { ADD_ARTICLE } from "@src/redux/constants/action-types"

// Initial States
const initialState = {
    "articles" : []
}

// Root OF Reducer Function
function rootReducer( state = initialState, action){
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles : state.articles.concat(action.payload)
        })
    }
    return state
}

export default rootReducer