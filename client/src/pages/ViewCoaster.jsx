import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Comment from "../components/Comment"
import axios from "axios"

const CoasterDetails = () => {
  const initialState = {
    id: sessionStorage.getItem("user"),
    name: sessionStorage.getItem("name"),
    comment: "",
  }

  const [coasterDetails, setCoasterDetails] = useState({})
  const [coasterReviews, setCoasterReviews] = useState([])
  const [formState, setFormState] = useState(initialState)
  const [editState, setEditState] = useState(initialState)

  let { id } = useParams()

  const getCoasterDetails = async () => {
    const response = await axios.get(`/api/coaster/${id}`)
    setCoasterDetails(response.data.coaster)
    setCoasterReviews(response.data.coaster.reviews)
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleEditChange = (e) => {
    setEditState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/coaster/${id}/review`, formState)
    setFormState(initialState)
    getCoasterDetails()
  }

  const handleEdit = async (e, id) => {
    e.preventDefault()
    await axios.put(`/api/review/${id}`, editState)
    setEditState(initialState)
    getCoasterDetails()
  }

  const handleDelete = async (id) => {
    await axios.delete(`/api/review/${id}`)
    getCoasterDetails()
  }

  useEffect(() => {
    getCoasterDetails()
  }, [])

  return (
    coasterReviews && (
      <div className="bg-white">
        <main>
          {/* Header */}
          <div className="bg-black py-24 sm:py-32 mt-20">
            <div className="mx-auto max-w-md px-6 sm:max-w-lg lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-4xl font-bold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none lg:text-6xl">
                {coasterDetails.name}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
                {coasterDetails.location}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src={coasterDetails.image}
                  alt=""
                />
              </div>
            </div>
            <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
              <div className="lg:pr-8">
                <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Comments
                  </h2>

                  {coasterReviews.map((comment) => (
                    <Comment 
                      key={comment._id} 
                      _id={comment._id}
                      id={comment.id}
                      name={comment.name} 
                      comment={comment.comment}
                      handleChange={handleChange}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete} 
                      handleEditChange={handleEditChange}
                      editState={editState}
                      />
                  ))}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Leave your comment here
                        </label>
                        <span
                          id="how-can-we-help-description"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          placeholder="Type in this box..."
                          type="text"
                          id="comment"
                          onChange={handleChange}
                          value={formState.comment}
                          name="comment"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          className="block w-full rounded-md border-gray-400 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm bg-stone-300"
                        />
                      </div>
                    </div>

                    <div className="text-right sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  )
}

export default CoasterDetails
