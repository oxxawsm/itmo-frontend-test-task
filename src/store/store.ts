import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "../store/reducer";
import thunk from "redux-thunk";
import languageReducer from "./language/reducer";

const appReducer = combineReducers({
    news: newsReducer,
    locale: languageReducer
})

export type AppState = ReturnType<typeof appReducer>

export const store = createStore(appReducer, applyMiddleware(thunk))