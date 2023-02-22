import Card from "../components/Card"
import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

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
    <>
    <Hero />
    <div className=" m-8 rounded-2xl ">
      {rides.map((ride) => (
        <Card 
          key={ride._id}
          id={ride._id}
          height={ride.height} 
          image={ride.image} 
          length={ride.length} 
          location={ride.location} 
          name={ride.name}
          time={ride.time} 
          video={ride.video}/>
      ))}
    </div>
    <Footer />
    </>
  )
}

export default Home
