import {
    CATEGORY_SERVICES_LIST,
    CATEGORY_SERVICES_LIST_SUCCESS,
    CATEGORY_SERVICES_LIST_FAILURE,
    RESET_CATEGORY_SERVICES_LIST
} from '../actions/actionType';
  
const initialState = {
    list: {},
    isFetching: false,
    error: []
};
  
export default function CategoryServiceList(state = initialState, action) {
    switch (action.type) {
      case CATEGORY_SERVICES_LIST:
        return {
            list: {},
            isFetching: true,
            error: []
        };
      case CATEGORY_SERVICES_LIST_SUCCESS:
        return {
            isFetching: false,
            list: action.data,
            error: []
        };
      case CATEGORY_SERVICES_LIST_FAILURE:
        return {
            isFetching: false,
            list: {},
            error: action.err
        };
      case RESET_CATEGORY_SERVICES_LIST:
        return {
            isFetching: false,
            list: {},
            error: []
        };
      default:
        return state;
    }
}