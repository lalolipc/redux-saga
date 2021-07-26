import {put, call, takeLatest} from "redux-saga/effects";
// put similar a dispatch para que los reducers haga los suyo
//call para llamar ala api
//takeLatest =funcion generadora para que se disparen acciones
function* getPokemons({payload})
{try{

}catch(err){

}
}
//watchers cuando inicie get pokemos llamame
export default function* pokemons(){
    yield takeLatest(START_GET_POKEMONS,getPokemons)
}