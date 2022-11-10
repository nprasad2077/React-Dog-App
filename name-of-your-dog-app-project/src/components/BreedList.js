import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import './BreedList.css'

const url = 'https://dog.ceo/api/breeds/list/all'
const urlRandom = 'https://dog.ceo/api/breeds/image/random/5'
const urlRandomMax = 'https://dog.ceo/api/breeds/image/random/50'

function BreedList() {
    const [post, setPost] = React.useState(null);
    const [show, setShow] = useState(false)

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data);
            // console.log(response.data);
        });
    }, []);

    if (!post) {return null;}


    const handleClick = () => {
        setShow((isVisible) => !isVisible)
    }



    const map = Object.entries(post.message);
    const keys = Object.keys(post.message)
    console.log(keys);

    return (
        <div className='breedList'>
            <button onClick={handleClick}>Show Breeds</button>
            {show &&     <ul>
                        {keys.map(breed =>
                                <li>
                                     {breed}
                                </li>
                        )}</ul>}

        </div>
    )
}

export default BreedList

// (
//     <ul>
//         {keys.map(breed =>
//             <li>
//                 {breed}
//             </li>
//         )}
//     </ul>
// )
