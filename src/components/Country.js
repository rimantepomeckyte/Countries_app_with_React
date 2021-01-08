import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './country.css';
const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams()

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json();
            setCountry(country);
            console.log(country);
        }
        getData();
    }, [])

    return (
        <>

            <section className="country" style={{height: "100%"}}>
                <Link to="/" className="text-white btn bg-secondary">Back Home</Link>
                <h1 className="my-3">Country information</h1>
                {(country.map((x) =>

                        <article key={x.alpha3Code} className="row country-details">

                                <img src={x.flag} alt={x.name} className="col-lg-5 col-md-6 col-11"/>

                                <div className="col-lg-4 col-md-4 col-11">
                                    <h2>{x.name}</h2>
                                    <h5>Region: <span>{x.region}</span></h5>
                                    <h5>Sub region: <span>{x.subregion}</span></h5>
                                    <h5>Capital: <span>{x.capital}</span></h5>
                                    <h5>Area: <span>{x.area} km2</span></h5>
                                    <h5>Population: <span>{x.population}</span></h5>

                                </div>
                                <div className="col-lg-3 col-md-2 col-11 ml-0 pl-0" style={{paddingTop: '34px'}}>
                                    <h5>Currencies: <span style={{fontSize: "15px"}}>{x.currencies.map(c => <li>{c.name}</li>)}</span></h5>
                                    <h5>Languages: <span style={{fontSize: "15px"}}>{x.languages.map(c => <li>{c.name}</li>)}</span></h5>
                                </div>

                        </article>
                    ))}
            </section>
        </>
    );
};

export default Country;