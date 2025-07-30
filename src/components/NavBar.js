import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo"> Recipe Manager</h2>
      <a href="/">Home</a>
  <a href="/recipes">All Recipes</a>
  <a href="/add">Add Recipe</a>
    
    </nav>
  );
}
