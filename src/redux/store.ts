import { createStore, combineReducers } from 'redux';
import poetryPageReducer from './poetryPageReducer';
import backgroundReducer from './backgroundRedecur';
import storyesPageReducer from './storyesReducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

let reducers = combineReducers({
    poetryPage: poetryPageReducer,
    background: backgroundReducer,
    storyPage: storyesPageReducer,
    searchWord: searchReducer,
    filterState: filterReducer
});

let store = createStore(reducers);

export type State = ReturnType<typeof reducers>;
export default store;