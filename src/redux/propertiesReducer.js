// redux/tenantReducer.js
import {
    FETCH_PROPERTIES_SUCCESS,
    FETCH_PROPERTIES_FAILURE,
    FETCH_PROPERTYARRAYDATA_SUCCESS,
    FETCH_PROPERTYARRAYDATA_FAILURE,
  } from './actionTypes'; // You'll create this later
  
  const initialState = {
    propertiesData: [],
    propertiesArrayData: [],
  };
  
  const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROPERTIES_SUCCESS:
        return {
          ...state,
          propertiesData: action.payload,
        };
      case FETCH_PROPERTIES_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };
  
  export default propertiesReducer;
  
  export const propertiesArrayDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PROPERTYARRAYDATA_SUCCESS:
        return {
          ...state,
          propertiesArrayData: action.payload,
        };
      case FETCH_PROPERTYARRAYDATA_FAILURE:
        return state; // You can handle failure case if needed
      default:
        return state;
    }
  };