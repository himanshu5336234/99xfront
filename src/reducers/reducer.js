import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CategoryList from './categoryList.reducer';
import CategoryServiceList from './categoryServiceList.reducer';
import ServiceDetails from './serviceDetails.reducer';

const appReducer = combineReducers({
    CategoryList,
    CategoryServiceList,
    ServiceDetails
});

const rootReducer = (state, action) => {
    if (action.type === 'SIGNOUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state, action);
};

// store configuration for reducers
export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}