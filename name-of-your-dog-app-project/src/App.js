import React from 'react'
import logo from './logo.svg';
import DogData from './components/DogData';
import BreedList from './components/BreedList';
import BreedForm from './components/BreedForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [randomDog, setRandomDog] = useState();
  const [randomDogBreed, setRandomDogBreed] = useState();
  const [currentView, setCurrentView] = useState();

  const setView = str => {
    setCurrentView(str)
  }

  const getRandomDog = () => {
    randomDogBreed &&
    axios.get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
      .then(res => setRandomDog(res.data.message))
      .catch(err => alert('that breed does not exist'))
  }
  
  useEffect(() => {
    getRandomDog()
  }, [randomDogBreed])   //Array tells react to 'skip' effect if the value has not changed between renders. 


  return (
    <div>
      {/* <DogData /> */}
      <Header setView={setView} />
      {/* <BreedList /> */}
      {/* <BreedForm randomDog={randomDog} randomDogBreed={randomDogBreed} getRandomDog={getRandomDog} setRandomDogBreed={setRandomDogBreed} /> */}
      {currentView === 'Search Dogs' ? <BreedForm randomDog={randomDog} randomDogBreed={randomDogBreed} getRandomDog={getRandomDog} setRandomDogBreed={setRandomDogBreed} /> : <BreedList />}
      

    </div>
  )
}

export default App