import React, { useEffect, useState } from 'react'

import { deleteAllDataAPI, getAllDataAPI } from '../service/allApi';
import ItemTable from '../Components/ItemTable';

function InventoryList() {
const[inventoryData, setInventoryData]=useState([])
const[isDataAdded,setIsDataAdded]=useState()
  // get inventory data
  const getAllData = async()=>{
    try {
      const result=await getAllDataAPI()
      console.log(result);
      setInventoryData(result.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  // console.log(inventoryData);
  
const handleDelete = async (id) => {
    try {
      await deleteAllDataAPI(id)
      // Refresh data after delete
      getAllData()
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  getAllData()
},[isDataAdded])

  return (
    <>
<div style={{
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
}}>
  {/* Main content */}
  <div className="container my-4" style={{ flex: 1 }}>
    <h1 className="mb-3">Recent Activity</h1>

{/* {inventoryData?.length>0?(
  inventoryData.map((inventory)=>(
  <ItemTable inventory={inventory}/>

  ))) :
  <h4 className='text-center text-danger w-100'>No Jobs Added</h4>
  } */}

  {inventoryData?.length > 0 ? (
  <ItemTable inventoryList={inventoryData} setIsDataAdded={setIsDataAdded}  onDelete={handleDelete} />
) : (
  <h4 className="text-center text-danger w-100">No Jobs Added</h4>
)}

  
  </div>


</div>

    </>
  )
}

export default InventoryList