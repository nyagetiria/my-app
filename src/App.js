import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/add" element={<RecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
