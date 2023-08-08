
import { createStore, combineReducers, applyMiddleware } from "redux"
import { reducer } from "./reducer/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const Reducer = combineReducers({
    store: reducer
})


const reduxStore = createStore(Reducer, {}, composeWithDevTools(applyMiddleware(thunk)))


export default reduxStore