import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const DeleteRevoew = () => {
  let navigate = useNavigate()

  let { reviewId } = useParams()
  console.log(reviewId)
  const [formState, setFormState] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    //UPDATE ROUTE !!!!!!! ///////
    await axios.delete(
      `http://localhost:3001/api/review/${reviewId}`,
      formState
    )
    setFormState({})
    navigate(`/`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Delete Comment</button>
    </form>
  )
}

export default DeleteReview
