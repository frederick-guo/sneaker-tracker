import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import EditProduct from "./components/edit-product.component";
import CreateProduct from "./components/create-category.component";
import CreateCategory from "./components/create-category.component";


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
        <Route path="/" exact component={ProductList} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/category" component={CreateCategory} />
    </div>
    </Router>
  );
}

export default App;
