import React,{useState} from "react";
import "./Parametrage.css"
import NewParametrage from "./NewParametreForm"
import ParametrageTable from "./ParametrageTable";
 
export default function Parametrage() {
    let [activeButtonIdx,setActiveButtonIdx] = useState(1)
    function buttonClicked(){
        setActiveButtonIdx(old=>!old)
    }
    return (
        <div className="article-wrapper">
            <div className="article-top">
                <button className={`button ${activeButtonIdx == 0 ? 'active':null}`} onClick={()=>buttonClicked()}>Parametrer</button>
                <button  className={`button ${activeButtonIdx == 1 ? 'active':null}`} onClick={()=>buttonClicked()}>Parametres</button>
            </div>
            <div className="article-content">
                {
                    activeButtonIdx == 0 ? <NewParametrage></NewParametrage>:<ParametrageTable></ParametrageTable>
                }
                
            </div>
        </div>
    )
}