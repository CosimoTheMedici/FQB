// import { createStore, combineReducers } from 'redux'
// import Mode from './setting/setting'
// export default createStore(
//     combineReducers({
//         mode: Mode
//     })
// )


import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './setting/reducers';
export const store = configureStore({
  reducer: {
    setting: settingReducer
  }
});


// redux/store.js
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import propertiesReducer, { propertiesArrayDataReducer } from './propertiesReducer'; // You'll create this later
// import tenantReducer from './tenantReducer'; // You'll create this later

// const rootReducer = combineReducers({
//   tenant: tenantReducer,
//   properties: propertiesReducer,
//   propertiesArray: propertiesArrayDataReducer,
//   //utilityData: utilityReducer,
//   //utilityArray: utilityArrayDataReducer,
//   // Add other reducers if needed
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;