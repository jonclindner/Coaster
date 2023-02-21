import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
const UpdateComment = () => {
  let navigate = useNavigate()

  let { reviewId } = useParams()
  console.log(reviewId)
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    ///////////////UPDATE ROUTES!!!!!!!!!!!!//////////////////////
    await axios.put(`http://localhost:3001/api/review/${reviewId}`, formState)
    setFormState({})
    navigate(`/`)
  }
  useEffect(() => {
    const getCommentDetails = async () => {
      let response = await axios.get(
        `http://localhost:3001/api/review/${reviewId}`
      )
      setFormState(response.data.comment)
      console.log(response.data)
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

      <button type="submit">Submit Updated Comment</button>
      <Link to={`/review/delete/${commentDetails._id}`}>
        <button>Delete Comment</button>
      </Link>
    </form>
  )
}

export default UpdateComment
