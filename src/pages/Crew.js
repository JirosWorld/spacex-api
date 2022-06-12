import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Header from "../components/header/Header";
import Loader from "../components/loader/Loader";
import "./Crew.css";
import infoIcon from "../assets/icons/information-square.svg";
import searchIcon from "../assets/icons/search-icon.svg";


function Crew() {

    const [items, setItems] = useState([]);
    const [crewInfo, setCrewInfo] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");


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
                    setError(
                        `Something went wrong while retrieving the data - (${error.message})`
                    );
                    console.error(error);
                }
            );
    }, []);

    console.log(items);
    const data = Object.values(items);

    const search_parameters = Object.keys(Object.assign({}, ...data));
    // data returned from an API may change, so do not use "const search_parameters = ["Name", "Agency", ...]"

    function search(items) {
        return items.filter((item) =>
            search_parameters.some((parameter) =>
                item[parameter].toString().toLowerCase().includes(query)
            )
        );
    }


    if (error) {
        return <>{error && <p className="error-message">{error}</p>}</>;
    } else if (!loading) {
        return <>{loading && <Loader/>}</>;
    } else {
        return (
            <div className="app crew-page">

                <Header
                    title="SpaceX Search crew members"/>

                <main>

                    <div className="wrapper">
                        <div className="search-wrapper">
                            <h2>
                                <img src={infoIcon} className="info" alt="info icon"/> Start typing
                                in the field in order to search for Crew members!
                            </h2>
                            <div className="search-field">
                                <p>
                                    <img src={searchIcon} className="info" alt="info icon"/> <label
                                    htmlFor="search-form">
                                    <input
                                        type="search"
                                        name="search-form"
                                        id="search-form"
                                        className="search-input"
                                        placeholder="Search by first- or last name..."
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                </label>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="nav-link">
                        <p>⬅︎ Back to <Link to="/">the Home page</Link>.</p>
                    </div>

                    <div className="wrapper">
                        <ul className="card-grid">
                            {search(data).map((item) => (
                                <li key={item.id}>
                                    <article className="card">
                                        <div className="card-image">
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                        <div className="card-content">
                                            <h2 className="card-name">{item.name}</h2>
                                            <br/>
                                            Agency: {item.agency}
                                            <br/>
                                            <a href={`${item.wikipedia}`}
                                               rel="noreferrer"
                                               className="break"
                                               target="_blank">
                                                {item.wikipedia}
                                            </a>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>

                </main>

            </div>
        );
    }
}

export default Crew;