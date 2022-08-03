import {
    SERVICES_DETAILS,
    SERVICES_DETAILS_SUCCESS,
    SERVICES_DETAILS_FAILURE,
    RESET_SERVICES_DETAILS
} from '../actions/actionType';
  
const initialState = {
    data: {},
    isFetching: false,
    error: []
};
  
export default function ServiceDetails(state = initialState, action) {
    switch (action.type) {
      case SERVICES_DETAILS:
        return {
            data: {},
            isFetching: true,
            error: []
        };
      case SERVICES_DETAILS_SUCCESS:
        return {
            isFetching: false,
            data: action.data,
            error: []
        };
      case SERVICES_DETAILS_FAILURE:
        return {
            isFetching: false,
            data: {},
            error: action.err
        };
      case RESET_SERVICES_DETAILS:
        return {
            isFetching: false,
            data: {},
            error: []
        };
      default:
        return state;
    }
}