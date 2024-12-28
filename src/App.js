import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./page/Home";
import Basket from "./page/Basket";
import Favorites from "./page/Favorites";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
