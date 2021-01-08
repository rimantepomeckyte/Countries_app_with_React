import React, {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Country from "./Country";

const Main = () => {
    const [countries, setCountries] = useState([]);

    const getData = async () => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        //console.log(data);
        setCountries(data);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <Router>
            <Route exact path="/">
                <Header/>
                <SearchForm countries={countries}/>
            </Route>
            <Route path="/countries/:name" children={<Country />}></Route>
        </Router>
    );
}
export default Main;