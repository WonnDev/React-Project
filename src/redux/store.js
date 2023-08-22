import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const store = configureStore({
  reducer: rootReducers,
});

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../redux/reduces/rootReducer';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
