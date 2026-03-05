import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Collection" element={<CollectionPage />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
