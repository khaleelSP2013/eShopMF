import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./components/add-product";
import ViewProduct from "./components/view-product";
import "./root.component.css"
import DeleteComponent from "./components/delete-component";
import UpdateComponent from "./components/update.component";


export default function Root(props) {
 
  return (
     <BrowserRouter>
          <div className="container">
            <Link to="/react1/addproduct">
              Add Product
            </Link>{'             '}
            <Link to="/react1/viewproduct">
              View Product
            </Link>
          </div>
     
          <Routes>
          <Route path="react1" element={<AddProduct />} />
            <Route path="react1/addproduct" element={<AddProduct />} />
            <Route path="react1/viewproduct" element={<ViewProduct />}>
              <Route path="updateproduct" element={<UpdateComponent />} ></Route>
              <Route path="deleteproduct" element={<DeleteComponent />} ></Route>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}
