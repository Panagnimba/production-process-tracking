import React,{useState} from "react";
import "./Production.css"
import NewProduction from "./NewProduction";
import ProductionTable from "../Production/ProductionTable";
import ProductionGraphs from "../Production/ProductionGraphs"
 
export default function Production() {
    let [activeButtonIdx,setActiveButtonIdx] = useState(1)
    function buttonClicked(e){
        setActiveButtonIdx(e.target.id)
    }
    function renderContent(){
        if(activeButtonIdx == 0 ) return <NewProduction></NewProduction>
        if(activeButtonIdx == 1 ) return <ProductionTable></ProductionTable>
        if(activeButtonIdx == 2 ) return <ProductionGraphs></ProductionGraphs>
    }
    return (
        <div className="article-wrapper">
            <div className="article-top">
                <button id="0" className={`button ${activeButtonIdx == 0 ? 'active':null}`} onClick={(e)=>buttonClicked(e)}>Lancer une opération de production</button>
                <button id="1" className={`button ${activeButtonIdx == 1 ? 'active':null}`} onClick={(e)=>buttonClicked(e)}>Production en cours</button>
                <button id="2" className={`button ${activeButtonIdx == 2 ? 'active':null}`} onClick={(e)=>buttonClicked(e)}>Consulter le graphique</button>
            </div>
            <div className="article-content">
                {
                    renderContent()
                }
                
            </div>
        </div>
    )
}