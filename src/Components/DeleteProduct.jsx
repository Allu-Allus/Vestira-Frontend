import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";


function DeleteProduct({id,onDelete}) {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmDelete = async()=>{
   try{
    await onDelete(id)
    handleClose()
   } catch(error){
    console.log(error);
    
   }
  }
  return (
    <>
     <Button variant="" className='btn w-100' onClick={handleShow}>
<MdDelete /></Button>

      <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  centered
>
  {/* Modal Header */}
  <Modal.Header
    style={{ backgroundColor: "#4B0147" }}
    closeVariant="white"
    closeButton
  ></Modal.Header>

  {/* Modal Body */}
  <Modal.Body className="p-3">
    <Card className="w-100 shadow-sm border-0" style={{ backgroundColor: "#F7F1F1" }}>
      <Card.Body>
        {/* Message */}
        <Card.Title className="fw-semibold text-center mb-3">
          This action cannot be undone. Delete product?
        </Card.Title>

        {/* Footer Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-3">
          <Button
            className="text-white flex-fill"
            style={{ backgroundColor: "#D4AF37", border: "none" }}
            onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="text-white flex-fill"  onClick={confirmDelete}
            style={{ backgroundColor: "#4B0147", border: "none" }}>
            Delete
          </Button>
          
        </div>
      </Card.Body>
    </Card>
  </Modal.Body>
</Modal>

    
    </>
  )
}

export default DeleteProduct