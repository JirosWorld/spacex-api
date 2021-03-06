import React, {useMemo, useEffect, useState} from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import './CrewTotalInfo.css';
import infoIcon from "../../assets/icons/information-square.svg";
import StyledButton from '../styled-components/StylizedButton';
import LikeButton from "../like-button/LikeButton";


function CrewTotalInfo() {

    const [crewInfo, setCrewInfo] = useState([]);
    const [numberOfItemsShown, setNumberOfItemsShown] = useState(3);
    const [expanded, setExpanded] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState("");

    // fetch

    useEffect(() => {
        async function fetchCrewInfo() {
            toggleLoading(true);
            setError("");

            try {
                const result = await axios.get("https://api.spacexdata.com/v4/crew/");

                setCrewInfo(result.data);

            } catch (error) {
                setError(
                    `Something went wrong while retrieving the data - (${error.message})`
                );
                console.error(error);
            }

            toggleLoading(false);
        }

        fetchCrewInfo();
    }, []);


    // show more button

    const showMore = () => {
        if (numberOfItemsShown + 3 <= crewInfo.length) {
            setNumberOfItemsShown(numberOfItemsShown + 3);
            setTimeout(() => {
                window.scrollTo(0,document.body.scrollHeight)
            }, 0);
        } else {
            setNumberOfItemsShown(crewInfo.length);
            setExpanded(true);
        }
    };

    const itemsToShow = useMemo(() => {
        return crewInfo
            .slice(0, numberOfItemsShown)
            .map((person, index) =>
                <li key={person.name + index}>
                    <div className="crew-info__item">

                        <div><img alt="Photo crew-member" src={person.image}/></div>


                        <div><strong>{person.name}</strong>
                            <br/>
                            Agency: {person.agency}
                            <br/>
                            <a href={`${person.wikipedia}`}
                               rel="noreferrer"
                               className="break"
                               target="_blank">
                                {person.wikipedia}
                            </a></div>

                        <LikeButton person={person}/>

                    </div>
                </li>
            );
    }, [crewInfo, numberOfItemsShown]);


    return (
        <section className="crew-info">
            <h2><img src={infoIcon} className="info" alt="info icon"/> Crew information</h2>

            <div className="crew-info__content">

                <div>
                    <ul>{itemsToShow.length ? itemsToShow : "Loading..."}</ul>

                    {expanded ? (
                        <strong>... these were all the crew-members!</strong>
                    ) : (
                        <StyledButton onClick={showMore}>show more</StyledButton>
                    )}
                </div>

                <div>
                    {error && <p className="error-message">{error}</p>}
                    {loading && <Loader/>}
                </div>
            </div>

        </section>
    );
}

export default CrewTotalInfo;