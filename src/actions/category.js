import { apiRequest } from '../api';
import {
    CATEGORY_LIST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAILURE,
    CATEGORY_SERVICES_LIST,
    CATEGORY_SERVICES_LIST_SUCCESS,
    CATEGORY_SERVICES_LIST_FAILURE,
    SERVICES_DETAILS,
    SERVICES_DETAILS_SUCCESS,
    SERVICES_DETAILS_FAILURE
} from './actionType';


/**
 *      Category Listing
 */
export function categoryListAPI() {
    return dispatch => {
        dispatch(categoryList());
        apiRequest({ method: 'get', url: 'v1/category' }).then(res => {
            dispatch(categoryListSuccess(res));
        }).catch(err => {
            dispatch(categoryListFailure(err));
        });
    };
}
  
export function categoryList() {
    return {
        type: CATEGORY_LIST
    };
}
  
export function categoryListSuccess(data) {
    return {
        type: CATEGORY_LIST_SUCCESS,
        data
    };
}
  
export function categoryListFailure(err) {
    return {
        type: CATEGORY_LIST_FAILURE,
        err
    };
}


/**
 *      Category Services Listing
 */
export function categoryServiceListAPI(slug) {
    return dispatch => {
        dispatch(categoryServiceList());
        apiRequest({ method: 'get', url: 'v1/category/'+slug+'/service' }).then(res => {
            dispatch(categoryServiceListSuccess(res));
        }).catch(err => {
            dispatch(categoryServiceListFailure(err));
        });
    };
}
  
export function categoryServiceList() {
    return {
        type: CATEGORY_SERVICES_LIST
    };
}
  
export function categoryServiceListSuccess(data) {
    return {
        type: CATEGORY_SERVICES_LIST_SUCCESS,
        data
    };
}
  
export function categoryServiceListFailure(err) {
    return {
        type: CATEGORY_SERVICES_LIST_FAILURE,
        err
    };
}


/**
 *      Services Details
 */
export function serviceDetailsAPI(slug) {
    return dispatch => {
        dispatch(serviceDetails());
        apiRequest({ method: 'get', url: 'v1/service/'+slug }).then(res => {
            dispatch(serviceDetailsSuccess(res));
        }).catch(err => {
            dispatch(serviceDetailsFailure(err));
        });
    };
}
  
export function serviceDetails() {
    return {
        type: SERVICES_DETAILS
    };
}
  
export function serviceDetailsSuccess(data) {
    return {
        type: SERVICES_DETAILS_SUCCESS,
        data
    };
}
  
export function serviceDetailsFailure(err) {
    return {
        type: SERVICES_DETAILS_FAILURE,
        err
    };
}