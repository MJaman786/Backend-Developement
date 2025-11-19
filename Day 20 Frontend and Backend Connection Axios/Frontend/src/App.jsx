import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  // const [jokes, setJokes] = useState([
  //   { id: 1, body: "This is Joke 1", desc: 'scljaslcjascacjs' },
  //   { id: 2, body: "This is Joke 2", desc: 'scljaslcjascacjs' },
  //   { id: 3, body: "This is Joke 3", desc: 'scljaslcjascacjs' },
  //   { id: 4, body: "This is Joke 4", desc: 'scljaslcjascacjs' },
  // ]);



  const DummyCard = ({ joke }) => {
    return (
      <div
        className='jokes-card'
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "10px 0px",
          padding: "10px 20px",
          textAlign: "start",
          backgroundColor: "#a5a5a5f8",
          borderRadius: "20px"
        }}
      >
        <h3>Joke id: {joke.id}</h3>
        <h3>Joke body: {joke.body}</h3>
        <h3>Joke dsec: {joke.desc}</h3>
      </div>
    );
  };
  async function fetchData() {
    const response = await axios.get('http://localhost:3000/api/jokes');
    setJokes(response.data);
  }
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <h1>This is Frontend and Backend Connection</h1>
      <h2>Jokes: {jokes.length}</h2>

      <div className="joke-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        width: "100%",
      }}>
        {jokes.map((joke) => (
          <DummyCard joke={joke} key={joke.id} />
        ))}
      </div>
    </>
  );
}

export default App;