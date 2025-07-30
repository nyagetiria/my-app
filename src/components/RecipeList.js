import { useEffect, useState } from "react";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updated = recipes.filter((r) => r.id !== id);
      setRecipes(updated);
    });
  }

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.ingredients}</p>
          <p>{r.instructions}</p>
          <button onClick={() => handleDelete(r.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
