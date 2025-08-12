
import { useNavigate } from 'react-router-dom';
import AddEdit from '../Components/AddEdit';
import RecentTable from '../Components/RecentTable';
import DashboardCard from '../Components/DashboardCard';


function Dashboard() {
  
  const navigate = useNavigate()
  return (
    <>
    <div style={{backgroundColor:"#F7F1F1",minHeight: "100vh"}}>
       <DashboardCard/> 

        <div className="container py-3">
      <div className="row g-3 justify-content-center text-center">
        <div className="col-12 col-sm-6 col-md-3">
          {/* <button className='btn w-100' style={{backgroundColor:"#BFA5A0"}}>Add New Product</button> */}
          <AddEdit/>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <button className='btn w-100' onClick={() => navigate("/inventorylist")} style={{backgroundColor:"#BFA5A0"}}>Inventory List</button>
        </div>
        
        
      </div>
        </div>

           {/* recent activity */}
    <div className="container my-4  ">
      <h1 className='mb-3'>Recent Activity</h1>
     <RecentTable/>
    </div>
    </div>

 
    </>
  )
}

export default Dashboard