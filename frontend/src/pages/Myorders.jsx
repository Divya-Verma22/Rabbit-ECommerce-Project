import React, { useEffect, useState } from 'react'

const Myorders = () => {
    const [orders , setOrders] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            const mockOrders = [
                {
                    _id : "1234",
                    createdAt : new Date(),
                    shippingAddress : {city : "New York" , country :"USA"},
                    orderItems : [
                        {
                            name : "Product 1",
                            image :
                        }
                    ]
                }
            ]
        })
    })
  return (
    <div>

    </div>
  )
}

export default Myorders