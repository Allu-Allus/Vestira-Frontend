import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { MdEdit } from "react-icons/md";
import { addDataAPI, editAllDataAPI, updateEditDataAPI } from '../service/allApi';

function AddEdit({isAdd,inventoryId,setIsDataAdded }) {
    const [show, setShow] = useState(false);

    const[addData,setAddData] = useState({
      productname :"",
      category :"",
      description :"",
      price:"",
      size:"",
      quantity:"",
      color:""
    })
    console.log(addData);
    
const handleShow = () => {
  console.log( inventoryId); 
  setShow(true);
  getEditItem()
};

const handleUpdateItem =async ()=>{
   const{productname,category,description,price,size,quantity,color}=addData
      console.log(productname,category,description,price,size,quantity,color);
        if (!productname|| !category|| !description|| !price|| !size|| !quantity|| !color){
          alert(`Fill the data completely`)
        }else {
          try {
            const result = await updateEditDataAPI( inventoryId,addData)
            console.log(result);
            
            handleClose()
             setIsDataAdded(prev => !prev); 
          } catch (error) {
            console.log(error);
            
          }
        }
}
    
    const handleadditem=async()=>{
      const{productname,category,description,price,size,quantity,color}=addData
      console.log(productname,category,description,price,size,quantity,color);
        if (!productname|| !category|| !description|| !price|| !size|| !quantity|| !color){
          alert(`Fill the data completely`)
        }else {
          try {
            const result = await addDataAPI(addData)
            console.log(result);
            handleClose()
          } catch (error) {
            console.log(error);
            
          }
        }
      }
      
  const getEditItem = async()=>{
       try {
            const result = await editAllDataAPI(inventoryId)
            console.log(result.data);
            setAddData(result.data)
          } catch (error) {
            console.log(error);
            
          }
  }  

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
           { isAdd? <Button  variant="" className='btn w-100' onClick={handleShow}>
                <MdEdit />
            </Button>
            :
            <Button  variant="" className='btn w-100' style={{backgroundColor:"#BFA5A0"}} onClick={handleShow}>
               Add New Product
            </Button>
            }

            <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header style={{backgroundColor:"#4B0147	"}} closeVariant="white"  closeButton>
                    {isAdd?<Modal.Title className='text-white'>Edit Product</Modal.Title>
                    :
                    <Modal.Title className='text-white'>Add Product</Modal.Title>
                    }
                </Modal.Header>
                {/* <Modal.Body> */}
  <Card className="w-100 shadow-sm border-0" style={{backgroundColor:"#F7F1F1"}}>
    <Card.Body>
      
      <div className="mt-3">
        <label className="fw-semibold">Product Name</label>
        <input value={addData?.productname}
          type="text" onChange={(e)=>setAddData({...addData,productname:e.target.value})}
          placeholder="Enter product name"
          className="form-control mt-2"
        />
        
      </div>

      
      <div className="mt-3">
        <label className="fw-semibold">Category</label>
        <input value={addData?.category}
          type="text" onChange={(e)=>setAddData({...addData,category:e.target.value})}
          placeholder="Enter category"
          className="form-control mt-2"
        />
      </div>

     
      <div className="mt-3">
        <label className="fw-semibold">Description</label>
        <textarea value={addData?.description} onChange={(e)=>setAddData({...addData,description:e.target.value})}
          placeholder="Enter description"
          className="form-control mt-2"
          rows="3"
        />
      </div>

      
      <div className="row">
        
        <div className="col-12 col-md-6">
          <div className="mt-3">
            <label className="fw-semibold">Price</label>
            <input value={addData?.price} onChange={(e)=>setAddData({...addData,price:e.target.value})}
              type="text"
              placeholder="Enter price"
              className="form-control mt-2"
            />
          </div>
          <div className="mt-3">
            <label className="fw-semibold">Stock Quantity</label>
            <input value={addData?.quantity}
              type="text" onChange={(e)=>setAddData({...addData,quantity:e.target.value})}
              placeholder="Enter stock quantity"
              className="form-control mt-2"
            />
          </div>
        </div>

        
        <div className="col-12 col-md-6">
          <div className="mt-3">
            <label className="fw-semibold">Size</label>
            <input value={addData?.size} onChange={(e)=>setAddData({...addData,size:e.target.value})}
              type="text"
              placeholder="Enter size"
              className="form-control mt-2"
            />
          </div>
          <div className="mt-3">
            <label className="fw-semibold">Color</label>
            <input value={addData?.color}
              type="text" onChange={(e)=>setAddData({...addData,color:e.target.value})}
              placeholder="Enter color"
              className="form-control mt-2"
            />
          </div>
        </div>
      </div>
       <Modal.Footer>
                    <Button variant="" className='text-white' onClick={handleClose} style={{backgroundColor:"#D4AF37"}}>
                        Cancel
                    </Button>
                    {isAdd?<Button variant="" className='text-white' style={{backgroundColor:"#4B0147"}} onClick={handleUpdateItem}>Update</Button>
                    :
                    <Button variant="" onClick={handleadditem} className='text-white' style={{backgroundColor:"#4B0147"}}>Add</Button>
                    }
                </Modal.Footer>
    </Card.Body>
  </Card>
{/* </Modal.Body> */}

               
            </Modal>

        </>
    )
}

export default AddEdit