import React, { useState, useEffect } from 'react';
import "./ListArticle.css"
import { iconsImgs } from "../../utils/images"
import axiosInstance from "../../axios/axios"


const ArticleTable = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Simulating fetch call to load articles
        async function fetchData() {
            let resp = await axiosInstance.get("/articles")
            if (resp.data.success) {
                setArticles(resp.data.result);
            }
        }
        fetchData();

    }, []);

    const updateArticle = async (id) => {
        const article = articles.find(a => a.idArticle === id);
        if (article) {
            let newArticle = null;
            const newDesignation = prompt("Enter new designation:", article.designation);
            const newQuantity = prompt("Enter new quantity:", article.quantite);
            if (newDesignation !== null && newQuantity !== null) {
                newArticle = { idArticle: article.idArticle, designation: newDesignation, quantite: parseInt(newQuantity, 10) }
                let resp = await axiosInstance.put(`/articles/${article.idArticle}`, newArticle)
                if (resp.data.success) {
                    setArticles(articles.map((a) => {
                        if (a.idArticle == id) { return newArticle; }
                        else return a
                    }))

                }

            }
        }
    };

    const deleteArticle = async (id) => {

        if (confirm("Voulez vous supprimer cet article")) {
            let resp = await axiosInstance.delete(`/articles/${id}`)
            if (resp.data.success) {
                setArticles(articles.filter(a => a.idArticle !== id));
            }

        }
    };

    return (
        <div className='list-wrapper'>
            <h2>Article List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Designation</th>
                        <th>Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, idx) => (
                        <tr key={idx}>
                            <td>{article.idArticle}</td>
                            <td>{article.designation}</td>
                            <td>{article.quantite}</td>
                            <td >
                                <img src={iconsImgs.pen} alt="" className='icon' />
                                <button className="button update" onClick={() => updateArticle(article.idArticle)}>Update</button>
                            </td>
                            <td >
                                <button className="button delete" onClick={() => deleteArticle(article.idArticle)}>Delete</button>
                                <img src={iconsImgs.trash} alt="" className='icon' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArticleTable;
