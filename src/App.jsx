import './App.css'
import Nav from './components/Nav/Nav'
import homeSplash from './homeSplash.jpg'
import Footer from './components/Footer/Footer'
import locationImg from './Location.jpg'
import { useEffect, useReducer } from 'react'
import { getAll } from '.././src/services/foodService'
import Card from './components/Card/Card'
import { Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const initialState = {foods: []}

const reducer =(state, action) => {
  switch(action.type){
    case 'FOODS_LOADED':
      return {...state, foods: action.payload}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const{foods} = state;

  useEffect( () => {
    getAll().then(foods => dispatch({type: 'FOODS_LOADED', payload:foods}))
  }, [])

  return (
    <>
      
      <Nav />
      <AppRoutes />
      <div className='splashImg'>
        <img src={homeSplash} />
        <div className='overlay'>
          <h1>Made fresh with authentic Texas flavor</h1>
          </div>
      </div>
      

      <div className='locationInfo'>
        <img className='locationImg' src={locationImg}></img>
        <div>
          <div>
            <div>
              <h1>Current Location</h1>
              <p>1234 Dallas Road Dallas, TX 75149</p>
            </div>
            <div>
              <h1>Today's Hours</h1>
              <p>11:30pm-7pm</p>
            </div>
          </div>
          <h2>Find our full hours and location schedule here!</h2>
        </div>
        
      </div>

      <h1 style={{textAlign: "center", fontFamily: "sans-serif", paddingTop: "15px"}}>Menu</h1>
        <Card foods = {foods}/>
      


      <Footer />
      
    </>
  )
}

export default App