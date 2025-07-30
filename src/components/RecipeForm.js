import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeForm() {
  const [form, setForm] = useState({ title: "", ingredients: "", instructions: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(() => navigate("/recipes"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="ingredients" placeholder="Ingredients" value={form.ingredients} onChange={handleChange} required />
      <textarea name="instructions" placeholder="Instructions" value={form.instructions} onChange={handleChange} required />
      <button>Add</button>
    </form>
  );
}
