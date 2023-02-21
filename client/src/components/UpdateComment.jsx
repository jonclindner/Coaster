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
    await axios.post(`http://localhost:3001/api/comments/${rideId}`, formState)
    setFormState({})
    navigate(`/`)
  }
  useEffect(() => {
    const getParkDetails = async () => {
      let response = await axios.get(
        `http://localhost:3001/api/parks/${parkId}`
      )
      setFormState(response.data.park)
    }
    getParkDetails()
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
      {/* <label htmlFor="material">Ground Surface Material:</label>
      <select id="material" onChange={handleChange} value={formState.material}>
        <option value="dirt">Dirt</option>
        <option value="grass">Cultivated Grass</option>
        <option value="gravel">Gravel</option>
        <option value="mix">Mix of Materials</option>
      </select>
      <label htmlFor="description">Park Description</label>
      <input
        type="text"
        id="description"
        onChange={handleChange}
        value={formState.description}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formState.image}
      /> */}
      <button type="submit">Submit Comment</button>
      <Link to={`/parks/delete/${parkDetails._id}`}>
        <button>Delete Park</button>
      </Link>
    </form>
  )
}

export default UpdateComment
