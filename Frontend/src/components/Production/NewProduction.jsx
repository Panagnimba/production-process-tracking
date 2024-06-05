import React, { useState, useEffect } from 'react';
// import './NewParametre.css';
import axiosInstance from "../../axios/axios"

export default function NewProduction() {
    const [articles, setArticles] = useState([]);
    const [gestionnaires, setGestionnaires] = useState([]);
    const [formData, setFormData] = useState({
        idArticle: '',
        quantite: 1,
        etape: 0, // etape zero : the beginning of production process
        idGestionnaire:''
    });


    useEffect(() => {
        async function fetchArticles() {
            let resp = await axiosInstance.get("/articles")
            if (resp.data.success) {
                setArticles(resp.data.result);
                // Set the default selected idArticle to the first article's idArticle
                if (resp.data.result.length > 0) {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        idArticle: resp.data.result[0].idArticle
                    }));
                }
            }
        }
        async function fetchGestionnaires() {
            let resp = await axiosInstance.get("/gestionnaires")
            if (resp.data.success) {
                setGestionnaires(resp.data.result);
                // Set the default selected idArticle to the first article's idArticle
                if (resp.data.result.length > 0) {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        idGestionnaire: resp.data.result[0].idGestionnaire
                    }));
                }
            }
        }
        fetchArticles()
        fetchGestionnaires()
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call the onCreate function passed as a prop with the form data
        console.log(formData);
        let resp = await axiosInstance.post("/production", formData)
        if (resp.data.success) {
            // Reset form data
            setFormData({
                idArticle: '',
                quantite: 1,
                etape: 0, // etape zero : the beginning of production process
                idGestionnaire:''
            });
            alert(resp.data.message)
        }
    };

    return (
        <div className="parametre-container">
            <h2>Odre de production</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idArticle">Article</label>
                    <select name="idArticle" id="" onChange={handleChange} required className="form-control">
                        {
                            articles.map(article => <option value={article.idArticle} key={article.idArticle}>{article.designation}</option>)
                        }
                    </select>
                </div>
            
                <div className="form-group">
                    <label htmlFor="quantite">Quantite</label>
                    <input
                        type="text"
                        className="form-control"
                        id="quantite"
                        name="quantite"
                        value={formData.quantite}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="etape">Etape</label>
                    <input
                        type="text"
                        className="form-control"
                        id="etape"
                        name="etape"
                        value={formData.etape}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="idGestionnaire">Gestionnaire</label>
                    <select name="idGestionnaire" id="" onChange={handleChange} required className="form-control">
                        {
                            gestionnaires.map(gestionnaire => <option value={gestionnaire.idGestionnaire} key={gestionnaire.idGestionnaire}>{`${gestionnaire.prenom} ${gestionnaire.nom}`}</option>)
                        }
                    </select>
                </div>
               
                <button type="submit" className="btn btn-primary">Lancer une operation de production</button>
            </form>
        </div>
    );
};


