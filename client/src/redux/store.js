import {applyMiddleware,combineReducers,createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const initalState = {


}


const reducers = combineReducers({

})
const store = createStore(reducers, initalState, composeWithDevTools(applyMiddleware(thunk)));


export default store;