import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "screens/Homepage";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Homepage/>} >
          {/* <Route path="/home" element = {<homepage/>}  ></Route> */}

        </Route>
        {/* <Route path="/register"  element={<Homepage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
