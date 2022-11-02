import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderRow = ({ order, handleDelete }) => {
  const { _id, serviceId, service, customer, email, phone, message, price } =
    order;

  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res => res.json())
      .then(data => {
        setOrderService(data);
      })
      .catch(err => console.error(err));
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          ❌
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService?.img ? (
                <img
                  src={orderService?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              ) : (
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{phone}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{message}</button>
      </th>
    </tr>
  );
};

export default OrderRow;
