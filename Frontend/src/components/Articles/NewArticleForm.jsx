import React, { useState } from "react";
import "./NewArticleForm.css"
import axiosInstance from "../../axios/axios"

export default function NewArticle() {
    let [article, setArticle] = useState({ designation: '', quantite: '' })

    function handleChange(e) {
        const { name, value } = e.target;
        setArticle(prevArticle => ({
            ...prevArticle,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        // Handle form submission logic here
        let resp = await axiosInstance.post("/articles", article)
        if (resp.data.success) {
            setArticle({ designation: '', quantite: '' })
            alert(resp.data.message)
        }
    };
    
    return (
        <div className="form-container">
            <h2>Create New Article</h2>
            <form method="post">
                <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" id="designation" name="designation" required value={article.designation} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="quantite">Quantity</label>
                    <input type="number" id="quantite" name="quantite" required value={article.quantite} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleSubmit}>Create Article</button>
                </div>
            </form>
        </div>
    )
}