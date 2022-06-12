import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";


function Crew() {

    const [items, setItems] = useState([]);
    const [crewInfo, setCrewInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const request_headers = new Headers();
        request_headers.append("Content-Type", "application/json");

        const request_options = {
            method: "GET",
            headers: request_headers,
        };

        fetch("https://api.spacexdata.com/v4/crew/", request_options)
            .then((res) => res.json())
            .then(
                (result) => {
                    toggleLoading(true);
                    setItems(result);
                },
                (error) => {
                    toggleLoading(true);
                    setError(error);
                }
            );
    }, []);

    console.log(items)

    if (error) {
        return <>{error.message}</>;
    } else if (!loading) {
        return <>{loading && <Loader/>}</>;
    } else {
        return (
            <div className="app">

                <Header
                    title="SpaceX Search crew members"/>

                <main>

                    <div>
                        <p>Start typing in the field in order to search for Crew members!</p>
                    </div>

                    <div className="nav-link">
                        <p>⬅︎ To <Link to="/">the Home page</Link>!</p>
                    </div>

                </main>

            </div>
        );
    }
}

export default Crew;