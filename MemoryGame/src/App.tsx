import { Toaster } from "sonner";
import "./App.css";
import AppRouter from "./assets/routes/AppRouter";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <AppRouter />
    </>
  );
}

export default App;
