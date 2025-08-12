
import React from 'react'
import Card from 'react-bootstrap/Card';
import { CiViewList } from "react-icons/ci";
import { BsExclamationTriangle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { SlUserFemale } from "react-icons/sl";

function DashboardCard() {
  return (
    <>
    <div className="container py-4 px-3">
  <div className="row g-4">
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="shadow-sm h-100" style={{ backgroundColor: "#4B0147" }}>
        <Card.Body className="d-flex align-items-center gap-3">
          <CiViewList className="fs-1 mb-2" style={{ color: "#D4AF37" }} />
          <div>
            <Card.Title className="text-white">Total Products</Card.Title>
            <Card.Subtitle className="mb-2 text-white">1250</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="shadow-sm h-100" style={{ backgroundColor: "#4B0147" }}>
        <Card.Body className="d-flex align-items-center gap-3">
          <BsExclamationTriangle className="fs-1 mb-2" style={{ color: "#D4AF37" }} />
          <div>
            <Card.Title className="text-white">Low Stock</Card.Title>
            <Card.Subtitle className="mb-2 text-white">38</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="shadow-sm h-100" style={{ backgroundColor: "#4B0147" }}>
        <Card.Body className="d-flex align-items-center gap-3">
          <RxCross2 className="fs-1 mb-2" style={{ color: "#D4AF37" }} />
          <div>
            <Card.Title className="text-white">Out of Stock</Card.Title>
            <Card.Subtitle className="mb-2 text-white">1250</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="shadow-sm h-100" style={{ backgroundColor: "#4B0147" }}>
        <Card.Body className="d-flex align-items-center gap-3">
          <SlUserFemale className="fs-1 mb-2" style={{ color: "#D4AF37" }} />
          <div>
            <Card.Title className="text-white">Categories</Card.Title>
            <Card.Subtitle className="mb-2 text-white">1250</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>

  </div>
</div>
    </>
  )
}

export default DashboardCard