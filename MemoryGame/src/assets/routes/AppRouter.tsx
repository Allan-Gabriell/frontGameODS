import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "../../pages/Initial/InitialPage";
import GamePage from "../../pages/GamePage/GamePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/game-ods" element={<GamePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
