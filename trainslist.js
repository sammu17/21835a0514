// TrainDetails.js
import React from "react"
import { useParams } from "react-router-dom"

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h1>{train.name}</h1>
      <p>Departure time: {train.departureTime}</p>
      <p>Arrival time: {train.arrivalTime}</p>
      <p>Price: {train.price}</p>
      <p>Seats available: {train.seatsAvailable}</p>
    </div>
  )
}

export default TrainDetails