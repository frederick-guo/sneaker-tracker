import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import DescriptionList from "./components/description-list.component";
import EditDescription from "./components/edit-description.component";
import CreateDescription from "./components/create-description.component";
import CreateProduct from "./components/create-product.component";


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
        <Route path="/" exact component={DescriptionList} />
        <Route path="/edit/:id" component={EditDescription} />
        <Route path="/create" component={CreateDescription} />
        <Route path="/user" component={CreateProduct} />
    </div>
    </Router>
  );
}

export default App;
