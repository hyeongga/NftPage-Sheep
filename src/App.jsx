import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/header";
import { useState } from "react";
import Shopping from "./pages/shopping";
import Footer from "./components/Footer";

function App() {
  const [account, setAccount] = useState("");
  return (
    <BrowserRouter>
      <Header account={account} setAccount={setAccount} />
      <Routes>
        <Route path="/" element={<Main account={account} />} />
        <Route path="/:tokenId" element={<Detail />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
