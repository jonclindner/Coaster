import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
const UpdateComment = () => {
  let navigate = useNavigate()

  let { rideId } = useParams()
  console.log(rideId)
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    ///////////////UPDATE ROUTES!!!!!!!!!!!!//////////////////////
    await axios.post(
      `http://localhost:3001/api/coaster/${coasterId}/review`,
      formState
    )
    setFormState({})
    navigate(`/`)
  }
  useEffect(() => {
    const getCommentDetails = async () => {
      let response = await axios.get(
        `http://localhost:3001/api/parks/${parkId}`
      )
      setFormState(response.data.comment)
    }
    getCommentDetails()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username:</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        id="comment"
        onChange={handleChange}
        value={formState.comment}
      />

      <button type="submit">Submit Comment</button>
      <Link to={`/parks/delete/${commentDetails._id}`}>
        <button>Delete review</button>
      </Link>
    </form>
  )
}

export default UpdateComment
