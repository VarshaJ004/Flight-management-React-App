import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ViewFlights = () => {

    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {

        axios.get("https://host-demo-app.onrender.com/api/flights")
            .then((response) => {
                console.log(response.data)
                changeData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
           

            <div className="container">

                <h2 className="heading">
                    View All Flights
                </h2>

                {
                    loading ? (
                        <h4 className="text-center">Loading...</h4>
                    ) : (
                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">
                                    <tr>
                                        <th>Flight No</th>
                                        <th>Airline</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Date</th>
                                        <th>Departure</th>
                                        <th>Arrival</th>
                                        <th>Fare</th>
                                        <th>Available Seats</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => (
                                            <tr key={index}>

                                                <td>{value.flight_number}</td>
                                                <td>{value.airline}</td>
                                                <td>{value.origin}</td>
                                                <td>{value.destination}</td>
                                                <td>{value.departure_date}</td>
                                                <td>{value.departure_time}</td>
                                                <td>{value.arrival_time}</td>
                                                <td>₹ {value.fare}</td>
                                                <td>{value.available_seats}</td>
                                                <td>{value.status}</td>

                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default ViewFlights