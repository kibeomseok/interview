import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import StatusM from "./pages/React/StatusM";
import Nav from "./components/Nav";
import LifeCycle from "./pages/React/LifeCycle";

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/React/StatusM" element={<StatusM />} />
        <Route path="/React/LifeCycle" element={<LifeCycle />} />
      </Routes>
    </>
  );
}

export default App;