import React from 'react'
import Card from 'react-bootstrap/Card';

function RecentTable() {
  return (
    <>

  <Card className='shadow-sm' style={{ maxWidth: '100%' }}>
                <Card.Body>
                  <table className='table table-striped table-bordered'>
                    <thead className=''>
                      <tr>
                        <th>Product</th>
                        <th>Action</th>
                        <th>Date</th>
                      </tr>
            
                    </thead>
                    <tbody>
                       <tr>
                        <td>Men's T-Shirt</td>
                        <td>Stock Updated</td>
                        <td>08/08/2025</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
    </>
  )
}

export default RecentTable