import React, { useEffect, useState } from 'react'

const AddProduct= () => {
  const [user,setuser]=useState([]);

  const getUserData= async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    setuser(data);
  };
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div>
      <p>Add Product Component</p>
      {user.map((e) => {
        return (
          <ul>
            <li key={e.id}>
                {e.username}
            </li>
          </ul>
        );
      })}
    </div>
  )
}

export default AddProduct
