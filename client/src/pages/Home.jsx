import Card from "../components/Card"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [rides, setRides] = useState()

  const getRides = async () => {
    const res = await axios.get('/api/coaster')
    setRides(res.data.coaster)
  }

  useEffect(() => {
    getRides()
  },[])

  return rides && (
    <div className="bg-slate-500 m-2 rounded-2xl ">
      {rides.map((ride) => (
        <Card 
          height={ride.height} 
          image={ride.image} 
          length={ride.length} 
          location={ride.location} 
          name={ride.name} 
          reviews={ride.reviews} 
          time={ride.time} 
          video={ride.video}/>
      ))}
    </div>
  )
}

export default Home
