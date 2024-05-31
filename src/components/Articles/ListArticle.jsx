// src/ArticleTable.js

import React, { useState, useEffect } from 'react';
import "./ListArticle.css"
import { iconsImgs } from "../../utils/images"

const initialArticles = [
    { idArticle: 1, designation: "Article A", quantite: 10 },
    { idArticle: 2, designation: "Article B", quantite: 15 },
    { idArticle: 3, designation: "Article C", quantite: 20 },
    { idArticle: 4, designation: "Article A", quantite: 10 },
    { idArticle: 5, designation: "Article B", quantite: 15 },
    { idArticle: 6, designation: "Article C", quantite: 20 }
];

const ArticleTable = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Simulating fetch call to load articles
        setArticles(initialArticles);
    }, []);

    const updateArticle = (id) => {
        const article = articles.find(a => a.idArticle === id);
        if (article) {
            const newDesignation = prompt("Enter new designation:", article.designation);
            const newQuantity = prompt("Enter new quantity:", article.quantite);
            if (newDesignation !== null && newQuantity !== null) {
                setArticles(articles.map(a => a.idArticle === id ?
                    { ...a, designation: newDesignation, quantite: parseInt(newQuantity, 10) } : a));
            }
        }
    };

    const deleteArticle = (id) => {
        setArticles(articles.filter(a => a.idArticle !== id));
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
                    {articles.map(article => (
                        <tr key={article.idArticle}>
                            <td>{article.idArticle}</td>
                            <td>{article.designation}</td>
                            <td>{article.quantite}</td>
                            <td >
                                <img src={iconsImgs.pen} alt="" className='icon'/>
                                <button className="button update" onClick={() => updateArticle(article.idArticle)}>Update</button>
                            </td>
                            <td >
                                <button className="button delete" onClick={() => deleteArticle(article.idArticle)}>Delete</button>
                                <img src={iconsImgs.trash} alt="" className='icon'/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArticleTable;
