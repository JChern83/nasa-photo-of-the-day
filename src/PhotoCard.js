import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./Info";
import {Jumbotron} from "reactstrap"
import styled from "styled-components";


export default function PhotoCard(){
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&`)
        .then(response => {
        console.log(response);
        setPhotoData(response.data);
        })
        .catch(error => {
        console.log("photo data didn't load today", error);
        });

    }, []);

    return (

        <div className = "photo-card">
            <Jumbotron><img src = {photoData.url} className = "space-img"/></Jumbotron>
            <Info
            title = {photoData.title}
            date = {photoData.date}
            explanation = {photoData.explanation}
            copyright = {photoData.copyright}
            />

        </div>

    )

}