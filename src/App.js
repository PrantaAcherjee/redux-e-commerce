import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
 

function App() {
  return (
    <div className="">
      <BrowserRouter>
       <Header></Header>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
