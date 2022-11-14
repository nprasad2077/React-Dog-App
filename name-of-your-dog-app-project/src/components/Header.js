import React from 'react'

function Header({setView}) {
  return (
    <div className='header'>
        <h1>Dogs!</h1>
        <nav className='links'>
            <h3 onClick={() => {setView('Breed List')}}>Breed List</h3>
            <h3 onClick={() => {setView('Search Dogs')}} className='search'>Search Dogs</h3>
        </nav>
    </div>
  )
}

export default Header