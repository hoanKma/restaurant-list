import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Restaurants from "./modules/restaurants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
