// import CreateComment from '../components/CreateComment'

// const ViewCoaster = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ViewCoaster

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CoasterDetails = () => {
  const [coasterDetails, setCoasterDetails] = useState({})

  const [CoasterReviews, setCoasterReviews] = useState([])

  let { CoasterId } = useParams()
  console.log(CoasterId)

  const getCoasterDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/coaster/${CoasterId}`
    )
    console.log(response.data)
    setCoasterDetails(response.data.coaster)
  }
  // const getCoasterReviews = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3001/api/reviews/${parkId}`
  //   )

  // setCoasterReviews(response.data.reviews)

  useEffect(() => {
    getCoasterDetails()
    // getParkReviews()
  }, [])

  return (
    <div>
      <div>
        <h1>{coasterDetails.name}</h1>
        <h2>{coasterDetails.location}</h2>
        <h3> {coasterDetails.height}</h3>
        <p>{coasterDetails.length}</p>
        <img
          style={{ display: 'block', maxWidth: '100%' }}
          src={coasterDetails.image}
          alt="Park"
        />

        {/* <Link
          to={`/coasters/update/${coasterDetails._id}`}
          key={coasterDetails._id}
        >
          <button>Update Information</button>
        </Link>
        <Link to={`/coasters/delete/${coasterDetails._id}`}>
          <button>Delete Park</button>
        </Link> */}
      </div>

      {/* {coasterReviews?.map((review) => (
        <div key={review._id}>
          <h1>Review By: {review.user}</h1>

          <h2>Comment: {review.comment}</h2>
        </div>
      ))} */}
    </div>
  )
}

export default CoasterDetails
