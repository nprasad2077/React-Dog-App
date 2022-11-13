import axios from 'axios'
import React from 'react'

const url = 'https://dog.ceo/api/breeds/image/random'
const urlRandom = 'https://dog.ceo/api/breeds/image/random/50'
const urlAll = 'https://dog.ceo/api/breeds/list/all'

function DogData() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(urlRandom).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) {return null;}

  return (
    <div>
        <img src={post.message}></img>
         {' '}
        {post.message}
    </div>
  )
}

export default DogData