import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Main";
import DogDetails from "./DogDetails";


const Routess = ({ dogs }) => {
    return (
        <>
            <Routes>
                <Route exact path='/dog' element={<Main dogs={dogs} />}></Route>
                <Route exact path='/dogs/:name' element={<DogDetails dogs ={dogs} />}></Route>
            </Routes>
        </>
    )
}

export default Routess
