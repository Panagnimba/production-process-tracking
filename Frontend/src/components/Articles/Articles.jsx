import React,{useState} from "react";
import "./Article.css"
import NewArticleForm from "./NewArticleForm";
import ListArticle from "./ListArticle";
 
export default function Article() {
    let [activeButtonIdx,setActiveButtonIdx] = useState(1)
    function buttonClicked(){
        setActiveButtonIdx(old=>!old)
    }
    return (
        <div className="article-wrapper">
            <div className="article-top">
                <button className={`button ${activeButtonIdx == 0 ? 'active':null}`} onClick={()=>buttonClicked()}>Ajouter un article</button>
                <button  className={`button ${activeButtonIdx == 1 ? 'active':null}`} onClick={()=>buttonClicked()}>Afficher les articles</button>
            </div>
            <div className="article-content">
                {
                    activeButtonIdx == 0 ? <NewArticleForm></NewArticleForm>:<ListArticle></ListArticle>
                }
                
            </div>
        </div>
    )
}