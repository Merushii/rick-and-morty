import React from 'react'
import "./styles/locationInfo.css"

const LocationInfo = ({location}) => {
  

  return (
    <div>
      <section>
        <h2 className='dimensionName'>{location?.name}</h2>
        <ul className='dimension__data'>
          <li><span>Type: </span>{location?.type}</li>
          <li><span>Dimension: </span>{location?.dimension}</li>
          <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
      </section>
    </div>
  )
}

export default LocationInfo