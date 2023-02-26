import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./styles/residentCard.css"

const ResidentCard = ({residentUrl}) => {

  const [residentInfo, setResidentInfo] = useState()

  useEffect(() => {
    axios.get(residentUrl)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))
    }, [])

  return (
      <article className='residentCard'>
        <div className="residentCard__img">
          <img src={residentInfo?.image} alt="" />
        </div>
        <section className='residentCard__dataSection'>
          <h3>{residentInfo?.name}</h3>
          <ul>
            <li><span>Specie: </span>{residentInfo?.species}</li>
            <li><span>Origin: </span>{residentInfo?.origin.name}</li>
            <li><span>Episodes: </span>{residentInfo?.episode.length}</li>
          </ul>
        </section>
      </article>
  )
}

export default ResidentCard