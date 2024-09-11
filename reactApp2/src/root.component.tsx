import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddCustomer from "./components/add-customer";
import ViewCustomer from "./components/view-customer";
import "./root.component.css"
export default function Root(props) {
 
  return (
   
    <BrowserRouter>
       <div className="container">
            <Link to="/react2/addcustomer">
              Add Customer
            </Link>{'             '}
            <Link to="/react2/viewcustomer">
              View Customer
            </Link>
            </div>
     
          <Routes>
          <Route path="react2" element={<AddCustomer />} />
            <Route path="react2/addcustomer" element={<AddCustomer />} />
            <Route path="react2/viewcustomer" element={<ViewCustomer />} />
          </Routes>
      </BrowserRouter>
      
  );
}
