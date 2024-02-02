import { useState, useEffect } from 'react';
import { FaThumbsDown } from 'react-icons/fa';

function ChuckNorrisJokes() {
  const [joke, setJoke] = useState("");
//   Get a random joke at the first load
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then(res => res.json())
      .then(json => setJoke(json.value))
  }, [])

  return (
    <div className="rounded-7xl p-px bg-transparent lg:bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
        <h2
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="1000"
            className="py-2 ml-1 font-mono font-thin text-pf-dark dark:text-pf-light text-md lg:text-lg"
        >
            Let us start with a joke,
        </h2>
        <h2
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="1100"
            className="py-2 ml-1 font-mono font-thin text-pf-dark dark:text-pf-light text-md lg:text-lg"
        >
            {joke}
        </h2>
        <button onClick={() => {
                fetchJoke();
            }} className="py-2 ml-1 font-mono font-thin text-pf-dark dark:text-pf-light text-md lg:text-lg">
                <p><FaThumbsDown/> Get a new Joke</p>
        </button>
    </div>
  );
//   Function to get a random joke on every button click
  function fetchJoke() {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
     .then(res => res.json())
     .then(json => setJoke(json.value))
  }
}
export default ChuckNorrisJokes;