import React, { useState, useEffect } from "react";
import { Scanner } from '@yudiel/react-qr-scanner';
import axiosInstance from "../../axios/axios";

export default function Parametrage() {
    let [activeButtonIdx, setActiveButtonIdx] = useState(0)
    let [paused, setPaused] = useState(false)
    function buttonClicked() {
        setActiveButtonIdx(!activeButtonIdx)
    }
    async function handleScan(result){
        let id = result[0].rawValue
        console.log(`idArticle =>${id}`)
        let resp = await axiosInstance.put(`/production/${id}`)
        console.log(resp.data)
    }
    return (
        <div className="article-wrapper">
            <div className="article-top">
                <button className={`button ${activeButtonIdx == 0 ? 'active' : null}`} onClick={() => {buttonClicked();setPaused(false)}}>Demarer</button>
                <button className={`button ${activeButtonIdx == 1 ? 'active' : null}`} onClick={() => {buttonClicked();setPaused(true)}}>Arreter</button>

            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "550px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Scanner interval={600} paused={paused} allowMultiple={true} onScan={(result)=>handleScan(result)} onError={(error) => console.error(error)} />
                </div>
            </div>
        </div>
    )
}