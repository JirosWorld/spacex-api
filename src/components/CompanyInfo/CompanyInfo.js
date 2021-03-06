import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader";
import './CompanyInfo.css';
import calculateYear from "../../helpers/calculateYear";
import infoIcon from "../../assets/icons/information-square.svg";


function CompanyInfo() {

    const [companyInfo, setCompanyInfo] = useState({});
    const [addressInfo, setAddressInfo] = useState({});

    const [companyInfoKeys, setCompanyInfoKeys] = useState({});
    const [companyInfoValues, setCompanyInfoValues] = useState({});
    const [addressValues, setAddressValues] = useState([]);
    const [socialLinksValues, setSocialLinksValues] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        async function fetchCompanyInfo() {
            toggleLoading(true);
            setError('');

            try {

                const result = await axios.get('https://api.spacexdata.com/v4/company/');

                console.log("Alle inhoud van object name: " + result.data["name"]);
                console.log("Alle inhoud van object headq/adress: " + result.data["headquarters"[0]]);
                setCompanyInfo(result.data);

                const {
                    headquarters: {
                        address,
                        city,
                        state
                    }
                } = setAddressInfo(result.data);
                console.log("mijn adresobject 1 niveau: " + addressInfo.address); // prints: 'Rocket Road'
                console.log("mijn adresobject 1 niveau: " + addressInfo.city); // prints: 'Hawthorne'
                console.log("mijn adresobject 1 niveau: " + addressInfo.state); // prints: 'California'

                // convert objects to arrays that can be accessed
                setCompanyInfoKeys(Object.keys(result.data));
                setCompanyInfoValues(Object.values(result.data));
                // setAddressValues(Object.values(result.data.headquarters));
                setSocialLinksValues(Object.values(result.data.links));

            } catch (error) {

                setError(`Something went wrong while retrieving the data - (${error.message})`);
                console.error(error);
            }

            toggleLoading(false);

        }

        fetchCompanyInfo();

    }, []);

    return (

        <>

            {companyInfoValues &&

            <section className="company-info">
                <h2><img src={infoIcon} className="info" alt="info icon"/> Company information</h2>

                {error && <p className="error-message">{error}</p>}
                {loading && <Loader/>}


                {companyInfoKeys &&
                <div className="company-info__content">

                        <article className="card">
                            <div className="card-content">
                                <h3 className="card-name">general company information</h3>
                                <ol className="card-list">
                                    <li>
                                        Company name:
                                        <span>{companyInfo["name"]}</span>
                                    </li>
                                    <li>
                                        Summary:
                                        <span>{companyInfo["summary"]}</span>
                                    </li>
                                    <li>
                                        Address: <br/>
                                        Street: {/* companyInfo["headquarters"] */ }<br/>
                                        City: <br/>
                                        State: <br/>
                                        {/*{addressValues.map((addressItem, index) => {*/}
                                        {/*    return (<span key={index}>{addressItem}.<br/></span>)*/}
                                        {/*})}*/}
                                    </li>
                                </ol>
                            </div>
                        </article>

                    <article className="card">
                        <div className="card-content">
                            <h3 className="card-name">specific company details</h3>
                            <ol className="card-list">
                                <li>
                                    {companyInfoKeys[4]}:
                                    <span>{companyInfoValues[4]} = {calculateYear()} years ago.</span>
                                </li>
                                <li>
                                    There are no multiple 'locations'? Number of launch sites:
                                    <span>{companyInfoValues[7]}</span>
                                </li>
                                <li>
                                    Social URL's / {companyInfoKeys[1]} <br/>
                                    {socialLinksValues.map((urlItem, index) => {
                                        return (<span key={index}>
                                            <a
                                                href={`${urlItem}`}
                                                rel="noreferrer"
                                                target="_blank">{urlItem}</a>
                                            <br/>
                                        </span>)
                                    })}
                                </li>
                            </ol>
                        </div>
                    </article>

                </div>}

            </section>

            }


        </>

    )

}


export default CompanyInfo;