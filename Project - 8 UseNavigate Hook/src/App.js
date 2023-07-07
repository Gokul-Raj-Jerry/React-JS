import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/firstPage" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;