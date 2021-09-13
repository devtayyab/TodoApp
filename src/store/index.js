import React from 'react'
import { ToDos} from './reducer';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'



export const store = createStore(ToDos,applyMiddleware(thunk))
