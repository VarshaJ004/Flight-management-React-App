import React from 'react'
import { Link } from 'react-router-dom'

const NavbarFlight = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    Flight Management App

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-link" to="/">
                                Home
                            </Link>

                            <Link className="nav-link" to="/add">
                                Add Flight
                            </Link>

                            <Link className="nav-link" to="/view">
                                View Flights
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavbarFlight