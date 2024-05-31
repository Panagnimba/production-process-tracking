import React from "react";
import "./NewArticleForm.css"
export default function NewArticle() {
    return (

        <div class="form-container">
            <h2>Create New Article</h2>
            <form action="create_article.php" method="post">
                <div class="form-group">
                    <label for="designation">Designation</label>
                    <input type="text" id="designation" name="designation" required />
                </div>
                <div class="form-group">
                    <label for="quantite">Quantity</label>
                    <input type="number" id="quantite" name="quantite" required />
                </div>
                <div class="form-group">
                    <button type="submit">Create Article</button>
                </div>
            </form>
        </div>
    )
}