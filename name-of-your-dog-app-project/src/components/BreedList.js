import React from 'react'
import axios from 'axios';

const url = 'https://dog.ceo/api/breeds/list/all'
const urlRandom = 'https://dog.ceo/api/breeds/image/random/5'
const urlRandomMax = 'https://dog.ceo/api/breeds/image/random/50'

function BreedList() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(urlRandomMax).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) {return null;}


  return (
    <ul>
        {post.message.map(breed => 
            <li>{breed}</li>           
        )}
    </ul>
  )
}

export default BreedList