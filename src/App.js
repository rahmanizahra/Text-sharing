import './App.css';
import React, { useState } from "react";
import TextArea from './TextArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowText from './ShowText';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
   const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<TextArea url={url} text={text} setUrl={setUrl} setText={setText}/>}/>
<Route path={`/:id`} element={<ShowText/>}/>
</Routes>
 </BrowserRouter>
    );
}

export default App;
