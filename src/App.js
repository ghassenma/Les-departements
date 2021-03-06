import "./styles.css";
import ShoppingList from "./ShoppingList";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Chip, Box } from "@mui/material";
import Connection from "./Connection";
import Departementliste from "./Departementliste";
import Moviesliste from "./Moviesliste";


export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="App">
      <h1 className="appTitle">App of Small Apps</h1>
      <p> ghassen</p>

      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/Connection" element={<Connection />} />
          <Route path="/Departementliste" element={<Departementliste />} />
          <Route path="/Moviesliste" element={<Moviesliste />} />

        </Routes>
      </Box>
    </div>
  );
}
