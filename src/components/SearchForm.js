import React, {useState} from "react";
import options from "../data/options"
import AllCountries from "./AllCountries";

const SearchForm = ({countries}) => {
    // console.log(options)
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");
    const filteringCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase()))

    const getCountries = (e) => {
            setSearch(e.target.value)
    setRegion('');
        //console.log(search)
    }
    const getCountriesByRegion = (e) => {
        if(e.target.value === "All"){
            setRegion("")
            console.log("Visi")
        }else{
        setRegion(e.target.value);}
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }


    return (
        <>
            <form className="row mb-4 pt-5" onSubmit={handleSubmit}>
                <div className="col-md-4 col-10 mx-auto pl-0">
                    <select className="form-select form-control form-control-lg bg-dark text-white options-list"
                            aria-label="Default select example"
                            onChange={getCountriesByRegion}>
                        <option value='All' >All</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <input className="search-input form-control form-control-lg bg-dark text-white"
                           type="text"
                           placeholder="Search by country name.."
                           aria-label=".form-control-lg example"
                           onChange={getCountries}/>
                </div>
            </form>
            <AllCountries filtering={filteringCountries} />
        </>
    )
}

export default SearchForm;

