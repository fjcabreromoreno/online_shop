import { Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Navigation from "./routes/navigation";
import SignIn from "./routes/sign-in";

function Shop() {
  return <h1>I am the shop component</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
