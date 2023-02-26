import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENTS_PER_PAGE = 12;
function App() {
  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  const pagination = () => {
    const maxLimit = page * RESIDENTS_PER_PAGE;
    const minLimit = maxLimit - RESIDENTS_PER_PAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }

  const numbersPage = () => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE);
    const arrayPages = [];
    for(let i = 1; i <= quantityPages; i++){
      arrayPages.push(i)
    }
    return arrayPages
  }

  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])
  

  return (
    <div className="App">
      <navbar className="app__navbar">
        <div className="app__title">
          <img src="../src/assets/img/title-rick-and-morty.png" alt="rick and morty title" className='app__titleRickAndMorty'/>
          </div>
        <form onSubmit={handleSubmit} className="app__form">
          <input type="text" id='idLocation' placeholder='Type a location id...' />
          <button className='app__buttonSearch'>Search</button>
        </form>
      </navbar>
      <div className="app__locationInfo">
        <LocationInfo location = {location}/>
      </div>
      <section className='app_residentSection'>
        {
          pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl = {residentUrl}/>)
        }
      </section>
      <ul className='app__numbersPage'>
        {
          numbersPage()?.map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
    </div>
  )
}

export default App
