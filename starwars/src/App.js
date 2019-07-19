import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import './App.css';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  width: 100%;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // eslint-disable-next-line
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const fetchData = () => {
    axios.get(`https://swapi.co/api/people/${page}/?format=json`)
    // 'https://swapi.co/api/people/{number}/?format=api'
    
    //https://swapi.co/api/people/?format=json
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('error in api request :(')})
  }

  
  useEffect(fetchData, [page])

  console.log(data);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>The Rebels</h2>
      <AppContainer> 
          {data.map((rebels, index) => {
            return <Persons name={rebels.name} key={index} height={rebels.height} birthday={rebels.birth_year} eye={rebels.eye_color}/>
          })}
      </AppContainer>
    </div>
  );
}

export default App;
