
import { Suspense } from 'react'
import './App.css'
import Available from './Component/Available /Available'
import Navbar from './Component/Navbar/Navbar'
import Selected from './Component/Selected /Selected'

const fetchPlayer = async () => {
  const res = await fetch('/player.json');
  return res.json();
}

function App() {

const playerPromise = fetchPlayer();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
        <Available playerPromise={playerPromise} ></Available>
      </Suspense>
      <Selected></Selected>
    </>
  )
}

export default App
