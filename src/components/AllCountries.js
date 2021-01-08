import React from "react";
import "../App.css"
import {Link} from "react-router-dom";

const AllCountries = ({filtering}) => {

    return (
        <div className="country-list mx-5">
            {(filtering.map(country =>
                <div key={country.alpha3Code} className="country-card card mb-4 mr-4 bg-dark">
                    <img src={country.flag} className="card-img-top" alt=""/>
                    <div className="card-body pt-0">
                        <h5 className="card-title text-white row">{country.name}</h5>
                        <h5 className="text-white row capital">{country.capital}</h5>
                        <div className="row d-flex justify-content-center">
                            <Link className="text-white btn-sm bg-secondary" style={{textDecoration: "none"}} to={`/countries/${country.name}`}>Learn
                                more</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default AllCountries;