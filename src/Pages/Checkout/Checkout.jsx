import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleCheckout = ev => {
    ev.preventDefault();
    const form = ev.target;

    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      serviceId: _id,
      service: title,
      customer: name,
      price: service.price,
      email,
      phone,
      message
    };

    fetch(`http://localhost:5000/orders`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem(`turboCarToken`)}`
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
        console.log(result);
      })
      .catch(err => console.error(err));
  };

  const { _id, img, price, title } = service;
  return (
    <div className="">
      <form className="" onSubmit={handleCheckout}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
        </div>

        <div className="py-8 flex flex-col gap-4">
          <div className="">
            <input
              type="text"
              placeholder="first name"
              className="input input-bordered input-ghost w-full max-w-xs"
              name="firstName"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="last name"
              className="input input-bordered input-ghost w-full max-w-xs"
              name="lastName"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered input-ghost w-full max-w-xs"
              name="phone"
              required
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="email"
              className="input input-bordered input-ghost w-full max-w-xs"
              defaultValue={user?.email}
              readOnly
              disabled
              name="email"
            />
          </div>
          <div className="">
            <textarea
              name="message"
              className="textarea textarea-bordered w-full max-w-xs min-h-16"></textarea>
          </div>
          <div className="">
            <button className="border" type="submit">
              place order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
