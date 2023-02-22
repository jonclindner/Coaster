import Card from "../components/Card"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const Home = () => {
  const [rides, setRides] = useState()
  const myRef = useRef(null)

  const getRides = async () => {
    const res = await axios.get('/api/coaster')
    setRides(res.data.coaster)
  }

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" })   

  console.log(rides)

  useEffect(() => {
    getRides()
  },[])

  return (
    rides && (
      <>
        <Hero executeScroll={executeScroll} />
        <div ref={myRef} className=" m-8 rounded-2xl">
          {rides.map((ride) => (
            <Card
              key={ride._id}
              id={ride._id}
              height={ride.height}
              image={ride.image}
              length={ride.length}
              location={ride.location}
              name={ride.name}
              reviews={ride.reviews}
              time={ride.time}
              video={ride.video}
              userId={ride.userId}
              getRides={getRides}
            />
          ))}
        </div>
        <Footer />
      </>
    )
  )
}

export default Home
