import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/testing" element={<LandingPage/>}/>
          <Route path="/" element={<Home/>}/>
         </Routes>
      </div>
  );
}

export default App;
