import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import{useSelector,useDispatch} from 'react-redux';
import{startGetPokemons} from './redux/actions/pokemons'

function App(props) {//traer valor real de store
 const dispatch=useDispatch();//dispara las acciones hacia redux
 const[pokemons,setPokemons]=useState([]);
 useEffect(()=>{
if(pokemons.length===0){
  dispatch(startGetPokemons());
  setPokemons([{},{}]);
}
 });
 
 
 
  console.log(props)
  return (
    <div className="App">
     <p>hola</p>
    </div>
  );
}

export default App;
