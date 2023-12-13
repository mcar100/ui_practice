import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PracticeListPage from "./pages/PracticeList";
import PracticePage from "./pages/Practice";
import NotFoundPage from "./pages/NotFound";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="body-container">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice/:topic" element={<PracticeListPage />} />
          <Route
            path="/practice/:topic/:subtopic/:subtopic2"
            element={<PracticePage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="container">footer</footer>
    </div>
  );
}

export default App;
