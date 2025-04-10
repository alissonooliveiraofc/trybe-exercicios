import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';
import './App.css';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();

    const timer = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

if (loading) return <h1>Loading...</h1>;

  return (
    <>
    <h1>International Space Station Location Tracker</h1>
    {coordinates && (
      <>
        <h2>{`Latitude: ${coordinates.latitude}`}</h2>
        <h2>{`Longitude: ${coordinates.longitude}`}</h2>
      </>
    )}
    </>
)};

export default App;

