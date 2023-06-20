import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import SignInSignUp from "./pages/SignInSignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
