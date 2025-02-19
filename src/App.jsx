//-----dependencies
import React from "react";
import { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router";

//-----pages

import Welcome from "./pages/Welcome";
import About from "./pages/About";
import NotFound from "./pages/Notfound";

//-----components
import LoadingBar from "./components/LoadingBar";

export default function App(){

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [location]);

return(
  <>
  <LoadingBar isLoading={loading} />
   <Routes classname="bg-primary"> 
      
      <Route index element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
   

);
}