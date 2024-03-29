import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const inintialState={}
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    inintialState, 
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store