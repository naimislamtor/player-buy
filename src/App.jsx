
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Component/Available /Available'
import Navbar from './Component/Navbar/Navbar'
import Selected from './Component/Selected /Selected'

const fetchPlayer = async () => {
  const res = await fetch('/player.json');
  return res.json();
}
const playerPromise = fetchPlayer();


function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-[1320px] mx-auto flex justify-between'>
        <h1 className='font-bold text-3xl'>{toggle ? 'Available Player' : `Selected Player (${selectedPlayer.length}/6)`}</h1>
        <div>
          <button onClick={() => setToggle(true)} className={`btn rounded-l-2xl border-r-0 ${toggle && 'bg-[#E7FE29]'}`} >Available</button>
          <button onClick={() => setToggle(false)} className={`btn rounded-r-2xl border-l-0 ${toggle || 'bg-[#E7FE29]'}`}>{`Selected(${selectedPlayer.length})`}</button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
        }>
          <Available selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise} ></Available>
        </Suspense> : <Selected availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}></Selected>
      }


    </>
  )
}

export default App
