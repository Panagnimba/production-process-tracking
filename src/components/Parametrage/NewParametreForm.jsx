import React, { useState, useEffect } from 'react';
import './NewParametre.css';
import axiosInstance from "../../axios/axios"

const ParametrageForm = ({ onCreate }) => {
    const [articles, setArticles] = useState([]);
    const [formData, setFormData] = useState({
        stock_mp_time: '',
        manutention_time: '',
        production_step1_time: '',
        production_step2_time: '',
        production_step3_time: '',
        conditionnement_time: '',
        stock_pf_time: '',
        date_creation: '',
        idArticle: ''
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
        fetchArticles()
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
        let resp = await axiosInstance.post("/parametrage",formData)
        if (resp.data.success) {
            // Reset form data
            setFormData({
                stock_mp_time: '',
                manutention_time: '',
                production_step1_time: '',
                production_step2_time: '',
                production_step3_time: '',
                conditionnement_time: '',
                stock_pf_time: '',
                date_creation: '',
                idArticle: ''
            });
            alert(resp.data.message)
        }
    };

    return (
        <div className="parametre-container">
            <h2>Nouvelle configuration</h2>
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
                    <label htmlFor="stock_mp_time">Stock MP Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stock_mp_time"
                        name="stock_mp_time"
                        value={formData.stock_mp_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="manutention_time">Manutention Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="manutention_time"
                        name="manutention_time"
                        value={formData.manutention_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="production_step1_time">Production Step 1 Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="production_step1_time"
                        name="production_step1_time"
                        value={formData.production_step1_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="production_step2_time">Production Step 2 Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="production_step2_time"
                        name="production_step2_time"
                        value={formData.production_step2_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="production_step3_time">Production Step 3 Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="production_step3_time"
                        name="production_step3_time"
                        value={formData.production_step3_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="conditionnement_time">Conditionnement Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="conditionnement_time"
                        name="conditionnement_time"
                        value={formData.conditionnement_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stock_pf_time">Stock PF Time</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stock_pf_time"
                        name="stock_pf_time"
                        value={formData.stock_pf_time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Parametrage</button>
            </form>
        </div>
    );
};

export default ParametrageForm;
