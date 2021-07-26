import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxSaga from 'redux-saga';
function reducers(){
    return{
        testing:''//probar que esta conectado al store de redux
    };
}

export default()=>{
    return {
        ...createStore(reducers,applyMiddleware(reduxSaga()))
    };
};