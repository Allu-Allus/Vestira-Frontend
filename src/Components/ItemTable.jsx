import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AddEdit from '../Components/AddEdit';
import DeleteProduct from '../Components/DeleteProduct';
import { deleteAllDataAPI } from '../service/allApi';

function ItemTable({inventoryList,setIsDataAdded,onDelete,inventoryId  }) {
  console.log(inventoryId);
  
  console.log(inventoryList );
  
  // const handleDelete = async (id)=>{
  //   // console.log(id);
  //   try {
  //     const result = await deleteAllDataAPI(id)
  //     console.log(result);
  //     setIsDataAdded(true)
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  return (
    <>
 <Card className="shadow-sm" style={{ maxWidth: "100%" }}>
          <Card.Body>
            <div className="table-responsive">
              <table className="table table-striped table-bordered text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
    
                <tbody>
                  {inventoryList.map((inventory,index)=>(
                         <tr key={index}>
                    <td>{inventory?.productname}</td>
                    <td>{inventory?.category}</td>
                    <td>{inventory?.size}</td>
                    <td>{inventory?.color}</td>
                    <td>{inventory?.quantity}</td>
                    <td>₹{inventory?.price}</td>
                                        <td>{inventory?.description}</td>

                    {/* <td><FaCheckCircle className="me-1" />{inventory?.status} </td> */}
                    <td><AddEdit isAdd={true} item={inventory}  setIsDataAdded={setIsDataAdded} inventoryId={inventory.id} /></td>
                    <td ><DeleteProduct   id={inventory.id} onDelete={()=>onDelete(inventory.id)}  /></td>
                  </tr>
                  ))}
             
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
    </>
  )
}

export default ItemTable