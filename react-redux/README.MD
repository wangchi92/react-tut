## Background

> Redux is a Flux library
> Concept process: Reducer -> Store -> Components

Flux : A concept similar to Observer pattern

## Flux-tools
> A set of tools developed by Facebook to solve the "Zombie Notifications" problem
> Goal: make changes in state predictable
> Concept process: Action -> Dispatcher -> Stores -> View -> Action -> ...

## Basics

>>createStore
> import {createStore} from "redux";
> const reducer = (state, action) => {if(action.type==="INC")return state+action.payload};
> const store = createStore(reducer, [initial state]);
> store.subscribe(() => {console.log("store changed", store.getState())} );
> store.dispatch({type: "INC", payload: 1});
> **"type" is compulsory, "payload" can be anything else, but generally just put an object

>>combineReducers
> import {combineReducers} from "redux";
> const reducers = combineReducers({one: reducerOne})
> const store = createStore(reducers);

>>applyMiddleware
> import {applyMilddleware} from "redux";
> const logger = (store) => (next) => (action) => {console.log(action); next(action)};
> const middleware = applyMiddleware(logger);
> const store = createStore(reducer, 1, middleware);

>>redux-logger
> import logger from "redux-logger";
> const middleware = applyMiddleware(logger());

>>redux-thunk
> import thunk from "redux-thunk";
> const middleware = applyMiddleware(thunk, logger());
>>Convoluted/recursive dispatch
> store.dispatch((dispatch) => {dispatch();dispatch();dispatch();...)})

>>redux-promise-middleware
> import promise from "redux-promise-middleware";
> const middleware = applyMiddleware(promise(), thunk, logger());

>>react-redux
> import{connect, Provider} from "react-redux"
> <Provider store={store} />
> connect(mapStateToProps, mapDispatchToProps)(Component);
> connectAdvanced, batch: ??