import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


// Creates a Redux store that holds the complete state tree of your app. 
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

/*
The redux-thunk middleware, which allows simple asynchronous use of dispatch.
The most common use case for Redux Thunk is 
for communicating asynchronously with an
external API to retrieve or save data. 
Redux Thunk makes it easy to dispatch actions
that follow the lifecycle of a request to an external API */

/*By default, Redux’s actions are dispatched synchronously, 
which is a problem for any non-trivial app that needs to communicate with an external API
or perform side effects.
Redux also allows for middleware that sits between an action being
dispatched and the action reaching the reducers.*/
/*composeWithDevTools is needed when your Redux store needs enhancers.*/

