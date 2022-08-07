import React from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Movie from './components/Movie';
// import Footer from './components/Footer';
import SelectMovie from './components/SelectMovie';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
      {
        method: 'GET',
        headers: {
          'X-API-KEY': '073ebf2c-0cfd-48a1-a75f-c0ff90ca7e44',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((json) => setItems(json.films))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Movie items={items} />} />
        <Route path="/movie" element={<SelectMovie />} />
      </Routes>
      {/* <Footer /> он все ломает*/}
    </div>
  );
}

export default App;
