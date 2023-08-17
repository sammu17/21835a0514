// App.js
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import TrainsList from "./TrainsList"
import TrainDetails from "./TrainDetails"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Train Schedule</h1>
        <ul>
          <li><Link to="/trains">All Trains</Link></li>
        </ul>
        <TrainsList />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))