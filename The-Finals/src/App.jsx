import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/details/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;