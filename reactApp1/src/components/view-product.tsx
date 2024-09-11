import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import DeleteComponent from './delete-component'
import UpdateComponent from './update.component'

const ViewProduct= () => {
  return (
    <div>
      <p>View Product Component</p>
     
          <div>
            <Link to="updateproduct">
            Update Product
            </Link>{'             '}
            <Link to="deleteproduct">
              Delete Product
            </Link>
          </div>
          
          <Routes>
            <Route path="/" element={<UpdateComponent />} />
          </Routes>
          <Outlet/>
    </div>
  )
}

export default ViewProduct
