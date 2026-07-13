import React, { useState } from 'react'
import axios from 'axios'


const AddFlight = () => {

    const [input, changeInput] = useState({
        flight_number: "",
        airline: "",
        origin: "",
        destination: "",
        departure_date: "",
        departure_time: "",
        arrival_time: "",
        fare: "",
        total_seats: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        axios.post("https://host-demo-app.onrender.com/api/add-flight", input)
            .then((response) => {

                console.log(response.data)

                setMessage(response.data.message || "Flight added successfully")
                setError("")

                changeInput({
                    flight_number: "",
                    airline: "",
                    origin: "",
                    destination: "",
                    departure_date: "",
                    departure_time: "",
                    arrival_time: "",
                    fare: "",
                    total_seats: ""
                })

            })
            .catch((error) => {

                console.log(error)

                if (error.response) {
                    setError(error.response.data.message)
                } else {
                    setError("Something went wrong")
                }

                setMessage("")
            })
    }

    return (
        <div>

            

            <div className="container">

                <h2 className="heading">Add Flight</h2>

                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <div className="row">
                    <div className="col-12">

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Flight Number</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="flight_number"
                                    value={input.flight_number}
                                    onChange={inputHandler}
                                    placeholder="AI-505"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Airline</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="airline"
                                    value={input.airline}
                                    onChange={inputHandler}
                                    placeholder="Air India"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Origin</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="origin"
                                    value={input.origin}
                                    onChange={inputHandler}
                                    placeholder="Delhi"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Destination</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="destination"
                                    value={input.destination}
                                    onChange={inputHandler}
                                    placeholder="Mumbai"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Departure Date</b></label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="departure_date"
                                    value={input.departure_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Departure Time</b></label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="departure_time"
                                    value={input.departure_time}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Arrival Time</b></label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="arrival_time"
                                    value={input.arrival_time}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Fare (₹)</b></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="fare"
                                    value={input.fare}
                                    onChange={inputHandler}
                                    placeholder="5000"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Total Seats</b></label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="total_seats"
                                    value={input.total_seats}
                                    onChange={inputHandler}
                                    placeholder="180"
                                />
                            </div>

                            <div className="col-md-6 d-flex align-items-end">
                                <button
                                    className="btn btn-submit w-100"
                                    onClick={readValue}
                                >
                                    Add Flight
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddFlight