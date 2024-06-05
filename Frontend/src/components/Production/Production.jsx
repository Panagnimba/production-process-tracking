import React, { useState } from "react";
import "./Production.css"
import NewProduction from "./NewProduction";
import ProductionTable from "../Production/ProductionTable";
import ProductionGraphs from "../Production/ProductionGraphs"

export default function Production() {
    let [activeButtonIdx, setActiveButtonIdx] = useState(1)
    let [filtreOption,setFiltreOption] = useState("hour")
    let [typeOption,setTypeOption] = useState("line")

    function buttonClicked(e) {
        setActiveButtonIdx(e.target.id)
    }
    function handleFiltreChange(e){
        console.log(e.target.value)
        setFiltreOption(e.target.value)
    }
    function handleTypeChange(e){
        console.log(e.target.value)
        setTypeOption(e.target.value)
    }
    function renderContent() {
        if (activeButtonIdx == 0) return <NewProduction></NewProduction>
        if (activeButtonIdx == 1) return <ProductionTable></ProductionTable>
        if (activeButtonIdx == 2) return <ProductionGraphs filtreOption={filtreOption} typeOption={typeOption}></ProductionGraphs>
    }
    return (
        <div className="article-wrapper">
            <div className="article-top">
                <button id="0" className={`button ${activeButtonIdx == 0 ? 'active' : null}`} onClick={(e) => buttonClicked(e)}>Lancer une opération de production</button>
                <button id="1" className={`button ${activeButtonIdx == 1 ? 'active' : null}`} onClick={(e) => buttonClicked(e)}>Production en cours</button>
                <button id="2" className={`button ${activeButtonIdx == 2 ? 'active' : null}`} onClick={(e) => buttonClicked(e)}>Consulter le graphique</button>
                <div className="button">
                    <label htmlFor="filtre">Type</label>
                    <select name="filtre" id="" onChange={handleTypeChange} required className="form-control">
                        <option value="line" >Line chart</option>
                        <option value="bar" >Bar chart</option>
                        <option value="pie" >Pie chart</option>
                    </select>
                </div>
                <div className="button">
                    <label htmlFor="filtre">Filtrer</label>
                    <select name="filtre" id="" onChange={handleFiltreChange} required className="form-control">
                        <option value="hour" >par heure</option>
                        <option value="day" >par jour</option>
                        <option value="month" >par mois</option>
                    </select>
                </div>
            </div>
            <div className="article-content">
                {
                    renderContent()
                }

            </div>
        </div>
    )
}