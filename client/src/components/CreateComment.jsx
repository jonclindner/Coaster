import { useState } from 'react'
import axios from 'axios'

const CreateReview = () => {
  const initialState = {
    name: '',
    comment: ''
  }
  let { coasterId } = useParams()
  console.log(coasterId)

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post(
      `http://localhost:3001/api/coaster/${coasterId}/review`,
      formState
    )
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">User:</label>
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

      <button type="submit">Submit Information</button>
    </form>
  )
}

export default CreateReview
