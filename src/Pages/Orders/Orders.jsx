import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, [user?.email]);

  const handleDelete = id => {
    const confirm = window.confirm(`Are you sure to delete?`);
    if (confirm) {
      fetch(`http://localhost:5000/orders/${id}`, { method: "delete" })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount >= 1) {
            alert("delete success");

            const remainingOrders = orders.filter(order => order._id !== id);
            setOrders(remainingOrders);
          }
        })
        .catch(err => console.error(err));
    }
  };
  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status: "approved" })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount >= 1) {
          alert("approved success");

          const remainingOrders = orders.filter(order => order._id !== id);
          const approvedOrder = orders.find(order => order._id === id);
          const newOrders = [approvedOrder, ...remainingOrders];
          setOrders(newOrders);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="">
        <h2 className="">total orders: {orders.length}</h2>

        <div className="">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
