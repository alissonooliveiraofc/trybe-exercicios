import { useState } from 'react';
import './App.css';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  return (
    <h1>International Space Station Location Tracker</h1>
  );
}

export default App;

