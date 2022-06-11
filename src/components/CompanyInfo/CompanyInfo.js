import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader";
import './CompanyInfo.css';
import calculateYear from "../../helpers/calculateYear";

function CompanyInfo(props) {

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

                setCompanyInfoKeys(Object.keys(result.data));
                setCompanyInfoValues(Object.values(result.data));
                setAddressValues(Object.values(result.data.headquarters));
                setSocialLinksValues(Object.values(result.data.links));
                console.log("clean data: ", result.data);
                console.log("object values: ", Object.values(result.data));
                console.log("object keys: ", Object.keys(result.data));
                console.log("addresses: ", Object.values(result.data.headquarters));
                console.log("socials: ", Object.values(result.data.links));


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

            {companyInfoValues ?

                <section className="company-info">

                    <h2>Company information</h2>

                    {error && <p className="error-message">{error}</p>}
                    {loading && <Loader/>}


                    <div className="company-info__content">

                        <p><em>general company information</em></p>

                        <h3>{companyInfoKeys[2]}</h3>
                        <p>{companyInfoValues[2]}.</p>

                        <h3>{companyInfoKeys[14]}</h3>
                        <p>{companyInfoValues[14]}.</p>

                        <h3>Address</h3>
                        {addressValues && addressValues.map((addressItem, index) => {
                            return (<p key={index}>{addressItem}.</p>)
                        })}

                        <p><em>specific company details</em></p>

                        <h3>{companyInfoKeys[4]}</h3>
                        <p>{companyInfoValues[4]} = {calculateYear()} years ago.</p>

                        <h3>Locations</h3>
                        <p>(no multiple locations? Number of launch sites instead:)</p>
                        <p>{companyInfoValues[7]}.</p>

                        <h3>Social URL's / {companyInfoKeys[1]}</h3>

                        {socialLinksValues && socialLinksValues.map((urlItem, index) => {
                            return (<p key={index}>
                                <a
                                    href={`${urlItem}`}
                                    rel="noreferrer"
                                    target="_blank">{urlItem}</a>
                            </p>)
                        })}

                    </div>


                </section>

                :

                <>

                    <h1>Company info not available</h1>

                    <div>
                        {error && <p className="error-message">{error}</p>}
                        {loading && <Loader/>}
                    </div>
                    <p>
                        Are you connected to the internet?
                    </p>

                </>

            }


        </>

    )

}


export default CompanyInfo;