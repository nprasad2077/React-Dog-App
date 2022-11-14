import React, { useTransition } from 'react'
import { useState } from 'react'

function BreedForm({setRandomDogBreed, getRandomDog, randomDog}) {
    const [form, setForm] = useState('');
    const [randomBreedInput, setRandomBreedInput] = useState('');
    
    const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        getRandomDog()
    }



  return (
    <div>
        {/* <label>
        Search Breed:{' '}
        <input value={form} onChange={e => setForm(e.target.value)}/>
        </label>
        <p>
            {form}
        </p> */}
        <div className='realForm'>
            <input type='text' onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        {randomDog && <img className='image' src={randomDog}></img>}
    </div>
  )
}

export default BreedForm